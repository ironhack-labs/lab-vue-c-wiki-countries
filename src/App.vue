<script setup>

import navbarVue from "@/components/navbar.vue";
import CountriesListVue from "./components/CountriesList.vue";
import CountryDetailsVue from "./components/CountryDetails.vue";


</script>

<template>
  <div class="app row">

    <!-- {%NAVBAR SECTION} -->

      <navbarVue />

    <!-- {%CountriesListVue SECTION} -->
    <div class="col-5 ">
      <CountriesListVue />
    </div>
  

    <!-- {%CountryDetailsVue SECTION} -->
    <div class="col-7">
      <CountryDetailsVue />
    </div>
  </div>



</template>


<style scope>
body {
  width: 90%;
}
</style>
