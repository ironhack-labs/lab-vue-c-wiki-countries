<!-- src/components/CountryDetails.vue -->

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const country = ref(null);
const countries = ref([]);

const fetchCountry = async (code) => {
  try {
    const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${code}`);
    country.value = response.data;
  } catch (error) {
    console.error('Error fetching country:', error);
  }
};

const fetchCountries = async () => {
  try {
    const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
    countries.value = response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

const getCountryName = (code) => {
  const found = countries.value.find((c) => c.alpha3Code === code);
  return found ? found.name.common : code;
};

onMounted(() => {
  fetchCountries();
  fetchCountry(route.params.alpha3Code);
});

watch(
  () => route.params.alpha3Code,
  (newCode) => {
    fetchCountry(newCode);
  }
);
</script>




<template>
  <div v-if="country">
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital?.[0] || 'N/A' }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km²</td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="border in country.borders" :key="border">
                <router-link :to="'/country/' + border">
                  {{ getCountryName(border) }}
                </router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
