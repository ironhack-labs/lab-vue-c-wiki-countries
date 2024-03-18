<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchCountryData } from '@/js/countryData.js';

const countryData = ref([]);
const route = useRoute();

const fetchData = async () => {
  countryData.value = await fetchCountryData();
};

fetchData();

const countryDetails = computed(() => {
  return countryData.value.find(country => country.alpha3Code === route.params.alpha3Code);
});

const getCountryName = (alpha3Code) => {
  const country = countryData.value.find(country => country.alpha3Code === alpha3Code);
  return country ? country.name.common : '';
};

const flagUrl = computed(() => {
  if (countryDetails.value) {
    return `https://flagcdn.com/${countryDetails.value.alpha2Code.toLowerCase()}.svg`;
  } else {
    return '';
  }
});

</script>

<template>
  <div v-if="countryDetails">
    <img :src="flagUrl" alt="Flag" style="max-width: 100px" />
    <h1>{{ countryDetails.name.common }}</h1>
    <p><strong>Capital:</strong> {{ countryDetails.capital.join(', ') }}</p>
    <p><strong>Area:</strong> {{ countryDetails.area }} km²</p>
    <p>
      <strong>Borders:</strong>
      <span v-if="countryDetails.borders.length > 0">
        <span v-for="(border, index) in countryDetails.borders" :key="border">
          <router-link :to="`/${border}`">{{ getCountryName(border) }}</router-link>
          <span v-if="index !== countryDetails.borders.length - 1">, </span>
        </span>
      </span>
      <span v-else>
        None
      </span>
    </p>
  </div>
</template>