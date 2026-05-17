<template>
  <div class="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
}
</style>