<template>
  <div class="app">
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
</script>
