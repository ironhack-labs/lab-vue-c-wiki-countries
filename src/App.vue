<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="app">
    <Navbar />
    <div class="container">
      <div class="row">
        <RouterView />
      </div>
    </div>
  </div>
</template>
