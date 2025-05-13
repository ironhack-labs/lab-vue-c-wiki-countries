<script setup>
import Navbar from './components/Navbar.vue';
import COUNTRIES from '../public/countries.json';
import { ref} from 'vue';

const countries = ref(COUNTRIES);
</script>


<template>
  <div class="app">
    <Navbar />
    <router-view :countries="countries" /> 
  </div>
</template>


<style scoped></style>
