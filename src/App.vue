<template>
  <div class="app">
    <Navbar />
    <!-- Bootstrap container wrapper div -->
    <div class="container">
      <!-- Bootstrap row wrapper div -->
      <div class="row">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
//import { useRoute, useRouter } from "vue-router";

import Navbar from './components/Navbar.vue';
</script>
