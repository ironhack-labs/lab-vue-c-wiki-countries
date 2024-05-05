<template>
  <div v-if="country">
    <img :src="flagUrl" alt="Flag" style="max-width: 100px" />
    <h1>{{ country.name.common }}</h1>
    <p><strong>Capital:</strong> {{ country.capital.join(', ') }}</p>
    <p><strong>Area:</strong> {{ country.area }} km²</p>
    <p>
      <strong>Borders:</strong>
      <span v-if="country.borders.length > 0">
        <span v-for="(border, index) in country.borders" :key="border">
          <router-link :to="`/${border}`">{{ getCountryName(border) }}</router-link>
          <span v-if="index !== country.borders.length - 1">, </span>
        </span>
      </span>
      <span v-else>
        None
      </span>
    </p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchCountryData } from '@/js/countryData.js';

const countryData = ref([]);
const route = useRoute();

const fetchData = async () => {
  countryData.value = await fetchCountryData();
};

onMounted(fetchData);

const getCountryName = (alpha3Code) => {
  const country = countryData.value.find(country => country.alpha3Code === alpha3Code);
  return country ? country.name.common : '';
};

const flagUrl = computed(() => {
  if (country.value) {
    return `https://flagcdn.com/${country.value.alpha2Code.toLowerCase()}.svg`;
  } else {
    return '';
  }
});

const country = computed(() => {
  return countryData.value.find(country => country.alpha3Code === route.params.alpha3Code);
});
</script>
