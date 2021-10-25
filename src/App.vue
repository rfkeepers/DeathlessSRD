<template>
<div class="overlord">

  <!-- Header -->
  <div
    id="deathless"
    class="headerBar"
  >

    <!-- Title -->
    <div
      class="headerBar__title"
      @click="routeHome"
    >
      Deathless
    </div>

    <!-- Navigation -->
    <div
      class="headerBar__nav-button"
      @click="linksShowing = !linksShowing"
    >
      &#9776;
    </div>

    <!-- Nav Dropdown -->
    <div class="headerBar__links" v-if="linksShowing">
      <NavDropdown
        @routed="hideNavs"
        name="Content"
        :links="contentLinks"
      />
      <div class="headerBar__links__spacer">|</div>
      <NavDropdown
        @routed="hideNavs"
        name="Glossary"
        :links="glossaryLinks"
      />
      <!-- <NavLink>Glossary</NavLink> -->
      <div class="headerBar__links__spacer">|</div>
      <NavDropdown
        @routed="hideNavs"
        name="About"
        :links="aboutLinks"
      />
    </div>
  </div>

  <!-- Body -->
  <div :class="{
    'pageBody': true,
    'pageBody--glossary': isGlossaryPage,
  }">
    <router-view></router-view>
  </div>

</div>
</template>

<script>
import NavDropdown from '@/components/NavDropdown.vue';

// --------------------------------------------------------------------
export default {
  name: "App",
  components: { NavDropdown },

  data() { return {
    linksShowing: matchMedia("screen and (min-width: 900px)").matches,
    aboutLinks: [
      {to: "/", text: "Home"},
      {to: "/feedback", text: "Feedback"},
      {to: "/design/moves", text: "Designing Move UX"},
      {to: "/design/examples", text: "Designing Examples UX"},
    ],
    contentLinks: [
      {to: "/about", text: "What Is Deathless?"},
      {to: "/other", text: "Next Part"},
    ],
    glossaryLinks: [
      {to: "/glossary/landing", text: "Glossary"},
    ],
  }; },

  computed: {
    isGlossaryPage() { return this.$route.href?.includes('glossary'); }
  },

  // --------------------------------------------------------------------
  mounted() {
    window.addEventListener('resize', this.onResize);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    onResize() {
      this.linksShowing = matchMedia("screen and (min-width: 900px)").matches;
    },

    hideNavs() {
      this.linksShowing = !matchMedia("screen and (max-width: 900px)").matches;
    },

    routeHome() {
      this.$emit('routed');
      this.$router.push('/');
    },
  },

  // --------------------------------------------------------------------
  watch: {

    // ensure the site displays the correct title on page change
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title;
        Array.from(document.querySelectorAll('[data-vue-app-controlled]'))
          .map(el => el.parentNode.removeChild(el));

        if(!to.meta.tags) { return; }

        to.meta.tags.map(tag => {
          const el = document.createElement('meta');
          Object.keys(tag).forEach(key => el.setAttribute(key, tag[key]));
          el.setAttribute('data-vue-app-controlled', true);
          return el;
        })
        .forEach(tag => document.head.appendChild(tag));
      },
    },

  },
};

// --------------------------------------------------------------------
</script>


<style lang="scss">
.headerBar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pageBody {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: auto;
}
</style>

<style lang="scss" scoped>
.headerBar {
  background: $color-background-sink;
  min-height: 58px;
  height: 58px;
  padding: 0.67em 1.5em 1em 1.5em;
  border-bottom: 2px solid $color-foreground-sunk;
  display: grid;

  @media screen and (max-width: 900px) {
    grid-template-columns: max-content auto max-content;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "title . navBtn"
      "subtitle . ."
      "nav nav nav";
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: max-content max-content auto max-content;
    grid-template-rows: auto;
    grid-template-areas:
      "title subtitle . nav";
    padding-left: 15%;
    padding-right: 15%;
  }

  &__links {
    grid-area: nav;
    display: flex;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      width: 100%;
    }

    @media screen and (min-width: 900px) {
      text-indent: 0.5em;
      align-self: end;
    }

    &__spacer {
      text-indent: 16px;

      @media screen and (max-width: 900px) {
        display: none;
      }
    }
  }

  &__nav-button {
    grid-area: navBtn;
    align-self: end;
    font-size: 20pt;
    margin-top: 4px;

    @media screen and (min-width: 900px) {
      display: none;
    }

    @media screen and (max-width: 900px) {
      display: visible;
    }
  }

  &__title {
    color: $color-text-pop;
    grid-area: title;
    font-size: 2em;
    cursor: pointer;

    @media screen and (min-width: 900px) {
      align-self: end;
    }
  }
}
</style>
