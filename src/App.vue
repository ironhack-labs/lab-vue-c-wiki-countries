<script setup>
import NavBar from "@/components/Navbar.vue"
import { ref, provide, onMounted } from 'vue'

const countries = ref([]);

onMounted(async () => {
  const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
  const data = await response.json();
  countries.value = data;
});

provide('countries', countries);
</script>

<template>
  <div class="app">
    <NavBar />
    <router-view />
  </div>
</template>
