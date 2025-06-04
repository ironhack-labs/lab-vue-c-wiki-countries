<template>
  <div class="app">
    <NavBar />
    <router-view :countries="countries" />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import countries from "./countries.json"; 
</script>
