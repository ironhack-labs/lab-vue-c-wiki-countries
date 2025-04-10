<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const countryDetails = ref(null);

const fetchCountryData = async (alpha3Code) => {
  try {
    const response = await fetch(
      `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
    );
    const data = await response.json();
    countryDetails.value = data;
  } catch (error) {
    console.error("Error fetching country data:", error);
  }
};

watch(
  () => route.params.alpha3Code,
  (newAlpha3Code) => {
    if (newAlpha3Code) {
      fetchCountryData(newAlpha3Code);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="col-7 country-details" v-if="countryDetails">
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`"
      :alt="countryDetails.name.common"
    />
    <h1>{{ countryDetails.name.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>
            {{ countryDetails.capital[0] }}
          </td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ countryDetails.area }} km² <sup>2</sup></td>
        </tr>
        <tr v-if="countryDetails.borders.length > 0">
          <td>Borders</td>
          <td>
            <router-link
              v-for="border in countryDetails.borders"
              :key="border"
              :to="`/list/${border}`"
              class="list-group-item list-group-item-action"
              >{{ border }}</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
    

    
  <style>
</style>