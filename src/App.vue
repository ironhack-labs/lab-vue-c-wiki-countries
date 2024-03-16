<script setup>
import NavBar from '@/components/Navbar.vue';
</script>

<template>
  <div class="app">
    <NavBar />
    <div class="container">
      <div class="row">
        <router-view />
      </div>
    </div>
  </div>
  
</template>

<style></style>