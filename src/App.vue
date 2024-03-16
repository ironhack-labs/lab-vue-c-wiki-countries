<script setup>

import navbarVue from "@/components/navbar.vue";
import CountriesListVue from "./components/CountriesList.vue";
import CountryDetailsVue from "./components/CountryDetails.vue";

</script>

<template>
  <div class="app">

    <!-- {%NAVBAR SECTION} -->

    <navbarVue />

    <!-- {%CountriesListVue SECTION} -->

    <CountriesListVue />

    <!-- {%CountryDetailsVue SECTION} -->

    <CountryDetailsVue />

  </div>



</template>


<style scope>
body {
  width: 90%;
}

</style>
