<template>
    <div v-if="country">
      <h1>{{ country.name.common }}</h1>
      <p>Capital: {{ country.capital }}</p>
      <p>Population: {{ country.population }}</p>
    </div>
    <div v-else>Loading country details...</div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "CountryDetails",
    data() {
      return {
        country: null,
      };
    },
    created() {
      this.fetchCountryDetails();
    },
    watch: {
      "$route.params.countryName": {
        immediate: true, // Fetch data on initial render and parameter change
        handler(newCountryName) {
          this.fetchCountryDetails(newCountryName);
        },
      },
    },
    methods: {
      async fetchCountryDetails(countryName = this.$route.params.countryName) {
        try {
          const response = await axios.get(
            `https://ih-countries-api.herokuapp.com/countries/${countryName}`
          );
          this.country = response.data[0];
        } catch (error) {
          console.error("Error fetching country details:", error);
          // Handle error appropriately, e.g., display an error message
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styling for the component if needed */
  </style>
  