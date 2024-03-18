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
  <div class="country-details">
    <img :src="flagUrl" alt="Flag" class="country-flag" />
    <h1>{{ countryDetails.name.common }}</h1>
    <table class="table">
      <tbody>
        <tr>
          <th>Capital</th>
          <td>{{ countryDetails.capital.join(', ') }}</td>
        </tr>
        <tr>
          <th>Area</th>
          <td>{{ countryDetails.area }} km²</td>
        </tr>
        <tr>
          <th>Borders</th>
          <td v-if="countryDetails.borders.length > 0">
            <ul>
              <li v-for="(border, index) in countryDetails.borders" :key="border">
                <router-link :to="`/${border}`" class="border-link">{{ getCountryName(border) }}</router-link>
              </li>
            </ul>
          </td>
          <td v-else>
            None
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

.country-flag {
  width: 600px;
}

</style>