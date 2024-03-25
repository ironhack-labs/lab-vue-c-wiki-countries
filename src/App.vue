<script setup>
import NavBar from "@/components/Navbar.vue"
import { ref, provide, onMounted } from 'vue'
import axios from 'axios'

const countries = ref([]);

onMounted(async () => {
  const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
  countries.value = response.data;
});

provide('countries', countries);
</script>

<template>
  <div class="app">
    <NavBar />
    <router-view />
  </div>
</template>
