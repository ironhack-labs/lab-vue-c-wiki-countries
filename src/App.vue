<script setup>

import Navbar from '@/components/Navbar.vue'
import CountriesList from '@/components/CountriesList.vue'
import CountryDetails from '@/components/CountryDetails.vue'


</script>

<template>
  <div class="app">
    <Navbar />
    <div class="components">
    <CountriesList />
    <CountryDetails />
  </div>
  </div>
</template>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
</style>