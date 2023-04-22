<template>
  <div class="app">
    <Navbar />
    <div class="container">
      <RouterView/>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";

export default {
  data: () => ({

  }),
  components: {
    Navbar,
    RouterView,
  },
};
</script>

<style>
</style>