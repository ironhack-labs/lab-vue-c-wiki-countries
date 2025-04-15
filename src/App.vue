<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';


</script>
<template>

  <div class="app">
    <Navbar/>
    <div class="row">
      <RouterView/>
    </div>


  </div>
</template>



<style>

</style>