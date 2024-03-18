<script setup>

import Navbar from '@/components/Navbar.vue'

</script>

<template>
  <div class="app">
    <Navbar />
      <router-view />
  </div>
</template>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";

</style>