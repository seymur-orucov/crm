<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import Auth from "./layouts/Auth.vue";
import Main from "./layouts/Main.vue";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "Auth";
    },
  },
  components: {
    Auth,
    Main,
  },
};
</script>

<style lang="sass">
@import "~materialize-css/dist/css/materialize.min.css"
@import "assets/css/index.css"
</style>
