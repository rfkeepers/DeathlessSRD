<template>
  <div id="deathless_srd" class="shell">
    <div class="shell__title">Deathless</div>
    <div class="shell__version">version: Alpha Playtest</div>
    <div
      class="shell__nav-button"
      @click="linksShowing = !linksShowing"  
    >&#9776;</div>
    <div class="shell__links" v-if="linksShowing">
      <NavDropdown
        @routed="hideNavs"
        name="The Game"
        :links="gameLinks"
      ></NavDropdown>
      <NavDropdown
        name="Core Concepts"
        :links="conceptsLinks"
      ></NavDropdown>
      <NavDropdown
        name="Moves"
        :links="movesLinks"
      ></NavDropdown>
      <NavDropdown
        name="Origins"
        :links="originsLinks"
      ></NavDropdown>
      <NavDropdown
        name="This Site"
        :links="siteLinks"
      ></NavDropdown>
    </div>
  </div>
  <router-view class="view"></router-view>
</template>

<script>
import NavDropdown from '@/components/NavDropdown.vue'

export default {
  name: "App",
  data() { return {
    linksShowing: matchMedia("screen and (min-width: 900px)").matches,
    siteLinks: [
      {to: "/deathless/", text: "Home"},
      {to: "/deathless/about", text: "About"},
      {to: "/deathless/feedback", text: "Feedback"},
    ],
    gameLinks: [
      {to: "/deathless/game/intro", text: "Introduction"},
      {to: "/deathless/game/agendas", text: "Agendas"},
      {to: "/deathless/game/safety", text: "Safety"},
      {to: "/deathless/game/hardware", text: "Hardware"},
      {to: "/deathless/game/conversation", text: "Conversation"},
      {to: "/deathless/game/scenes", text: "Scenes"},
      {to: "/deathless/game/characters", text: "Characters"},
    ],
    conceptsLinks: [
      {to: "/deathless/concepts/stats" , text: "Stats"},
      {to: "/deathless/concepts/death" , text: "Death"},
      {to: "/deathless/concepts/abyss" , text: "The Abyss"},
      {to: "/deathless/concepts/entanglements", text: "Entanglements"},
      {to: "/deathless/concepts/harm" , text: "Harm"},
    ],
    movesLinks:  [
      {to: "/deathless/moves/basic", text: "Basic Moves"},
      {to: "/deathless/moves/special" , text: "Special Moves"},
      {to: "/deathless/moves/helphinder" , text: "Help and Hindering"},
    ],
    originsLinks: [
      {to: "/deathless/origins/charactercreation", text: "Create a Character"},
      {to: "/deathless/origins/artiste" , text: "Artiste"},
      {to: "/deathless/origins/butcher" , text: "Butcher"},
      {to: "/deathless/origins/constable" , text: "Constable"},
      {to: "/deathless/origins/grifter" , text: "Grifter"},
      {to: "/deathless/origins/hunter" , text: "Hunter"},
      {to: "/deathless/origins/minister" , text: "Minister"},
      {to: "/deathless/origins/resurrectionist" , text: "Resurrectionist"},
      {to: "/deathless/origins/scholar" , text: "Scholar"},
      {to: "/deathless/origins/smith" , text: "Smith"},
      {to: "/deathless/origins/soldier" , text: "Soldier"},
      {to: "/deathless/origins/tinker" , text: "Tinker"},
    ],
  }; },
  created() { console.log('created'); },
  mounted() { window.addEventListener('resize', this.onResize); },
  beforeUnmount() { window.removeEventListener('resize', this.onResize); },
  methods: {
  onResize() { this.linksShowing = matchMedia("screen and (min-width: 900px)").matches; },
  hideNavs() { this.linksShowing = !matchMedia("screen and (max-width: 900px)").matches; }
  },
  components: {
    NavDropdown,
  },
};
</script>

<style lang="scss">
.shell {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.view {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style lang="scss" scoped>
  .shell {
    padding: 0.67em 1.5em 1em 1.5em;
    color: $color-contrast-neg;
    background: $color-space-neg;
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
    }

    &__nav-button {
      grid-area: navBtn;
      align-self: end;
      @media screen and (min-width: 900px) {
        display: none;
      }
      @media screen and (max-width: 900px) {
        display: visible;
      }
    }

    &__title {
      grid-area: title;
      font-size: 2em;
      @media screen and (min-width: 900px) {
        text-indent: 0.5em;
        align-self: end;
      }
    }

    &__version {
      grid-area: subtitle;
      font-size: 16px;
      color: $color-space-pos;
      text-indent: 0.5em;
      @media screen and (min-width: 900px) {
        align-self: end;
      }
    }
  }

  .view {
    margin: 1em 2em 0 2em;
    text-align: justify;

    @media screen and (min-width: 900px) {
      padding-left: 15%;
      padding-right: 15%;
    }
  }
</style>