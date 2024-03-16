<script setup>
// import { ref, onMounted } from 'vue';

// const countryDetails = ref({});

// // Fetch country details when the component is mounted
// onMounted(() => {
//   fetchCountryDetails();
// });

// const fetchCountryDetails = async () => {
//   const alpha3Code = $route.params.alpha3Code; // Access the alpha3Code from the route params
//   const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`);
//   countryDetails.value = await response.json();
// };

// // Function to get the border countries list
// const getBorderCountries = () => {
//   if (countryDetails.value.borders && countryDetails.value.borders.length > 0) {
//     return countryDetails.value.borders.join(', ');
//   } else {
//     return 'No border countries';
//   }
// };
</script>

<template>
  <!-- <div>
    <h1>{{ countryDetails.name.common }}</h1>
    <div>
      <p><strong>Capital:</strong> {{ countryDetails.capital[0] }}</p>
      <p><strong>Area:</strong> {{ countryDetails.area }} km²</p>
      <p><strong>Borders:</strong> {{ getBorderCountries() }}</p>
    </div>
  </div> -->
</template>

<style scoped>
</style>