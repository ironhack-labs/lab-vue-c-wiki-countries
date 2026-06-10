<script setup>
import NavBar from './components/NavBar.vue'
import CountriesList from './components/CountriesList.vue'
import { RouterView } from 'vue-router';
//import { ref, onMounted } from 'vue';


/* const countries = ref([])

onMounted(async ()=> {
  try{
    const response = await fetch(
      'https://ih-countries-api.herokuapp.com/countries'
    )

    countries.value = await response.json()
  }
  catch(error){
    console.error('Error fetching countries:', error);
    
  }}
) */

</script>

<template>
  <div class="app">
    <NavBar/>
    <div class="container">
      <div class="row">
        <div class="col-4 country-list">
        <CountriesList/>
        </div>
        <div class="col-8">
        <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
}
.country-list {
  height: 100vh;
  overflow-y: auto;
}
</style>