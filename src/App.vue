<template>
<div class="overlord">
  <div id="deathless" class="headerBar">
    <div class="headerBar__title" @click="routeHome">Deathless</div>
  </div>
  <div class="pageBody">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: "App",
  data() { return {
    linksShowing: matchMedia("screen and (min-width: 900px)").matches,
    siteLinks: [
      {to: "/", text: "Home"},
      {to: "/feedback", text: "Feedback"},
    ],
  }; },
  mounted() { window.addEventListener('resize', this.onResize); },
  beforeUnmount() { window.removeEventListener('resize', this.onResize); },
  methods: {
  onResize() { this.linksShowing = matchMedia("screen and (min-width: 900px)").matches; },
  hideNavs() { this.linksShowing = !matchMedia("screen and (max-width: 900px)").matches; },
  routeHome() {
    this.$emit('routed');
    this.$router.push('/');
  },
  },
  watch: {
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
  padding: 0.67em 1.5em 1em 1.5em;
  min-height: 58px;
  height: 58px;
  background: $color-background-sink;
  display: grid;
  border-bottom: 2px solid $color-foreground-sunk;

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
