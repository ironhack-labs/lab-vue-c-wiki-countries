<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const countryData = ref([]);
const alpha3Code = ref('');

const fetchCountryData = async () => {
  try {
    const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
    countryData.value = await response.json();
    alpha3Code.value = route.params.alpha3Code;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

onMounted(fetchCountryData);

const countryDetails = computed(() => {
  return countryData.value.find(country => country.alpha3Code === route.params.alpha3Code);
});
</script>

<template>
  <div v-if="countryDetails">
    <h1>{{ countryDetails.name.common }}</h1>
    <p><strong>Capital:</strong> {{ countryDetails.capital.join(', ') }}</p>
    <p><strong>Area:</strong> {{ countryDetails.area }} km²</p>
    <!-- Display other details as needed -->
  </div>
</template>

<style scoped>
</style>