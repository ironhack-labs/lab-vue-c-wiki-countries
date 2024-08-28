<template>
  <div class="app">
    <Navbar />
    <div class="container">
      <CountriesList :countries="countries" />
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";
import CountriesList from "./components/CountriesList.vue";

export default {
  name: "App",
  components: {
    Navbar,
    CountriesList,
  },
  data() {
    return {
      countries: [],
    };
  },
  created() {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        this.countries = response.data.map((country) => country.name.common);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
