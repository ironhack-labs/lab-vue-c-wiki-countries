<template>
  <div class="app">
    <NavBar />
    <router-view :countries="countries" />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'

const countries = ref(null);

/*FETCH */
async function fetchCountries() {
  const response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  )
  const finalResponse = await response.json();
  /*console.log(countries.value)*/
  countries.value = finalResponse;
}
fetchCountries()
</script>

<style scoped></style>
