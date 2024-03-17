<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const country = ref(null);

const fetchCountryDetails = async (alpha3Code) => {
  alpha3Code = alpha3Code.toUpperCase();
  try {
    const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
    const data = await response.json();
    country.value = data.find(c => c.alpha3Code === alpha3Code);
  } catch (error) {
    console.error("Error fetching country details:", error);
  }
};

onMounted(() => {
  fetchCountryDetails(route.params.alpha3Code);
});

watch(() => route.params.alpha3Code, (newAlpha3Code) => {
  fetchCountryDetails(newAlpha3Code);
});

watch(country, () => {
  console.log(country); 
});

</script>


<template>
  <div class="col-7" v-if="country">
     <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      :alt="`Flag of ${country.name.common}`"
      style="width: 50px"
    /> 
    
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital[0] }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km <sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="border in country.borders" :key="border">{{ border }}</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
