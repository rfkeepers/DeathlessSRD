<template>
  <div id="deathless_srd" class="shell">
    <div class="shell__title">
      Deathless PBTA
      <span class="shell__title__version">
        version: Alpha Playtest
      </span>
    </div>
    <div class="shell__links">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <hr/>
  <router-view class="view"/>
</template>

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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;

    &__title {
      font-size: 2em;
      &__version {
        font-size: 16px;
        color: $color-space-pos;
      }
    }
  }
  .view {
    padding: 8px;
  }
</style>