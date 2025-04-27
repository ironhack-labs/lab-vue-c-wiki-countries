<template>
    <div class="countries-list">
      <h2>Lista de países</h2>
  
      <ul v-if="countries.length > 0">
        <li v-for="country in countries" :key="country.alpha3Code">
          <router-link :to="`/list/${country.alpha3Code}`">
            {{ country.name.common }}
          </router-link>
        </li>
      </ul>
  
      <p v-else>Cargando países...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const countries = ref([]); // variable reactiva que guarda los países
  
  onMounted(async () => {
    try {
      const response = await fetch("https://ih-countries-api.herokuapp.com/countries");
      const data = await response.json();
      countries.value = data;
    } catch (error) {
      console.error("Error al cargar países:", error);
    }
  });
  </script>
  
  <style scoped>
  .countries-list {
    padding: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #007acc;
    text-decoration: none;
  }
  </style>
  