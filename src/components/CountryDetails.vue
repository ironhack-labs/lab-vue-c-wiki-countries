<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import countries from '../../public/countries.json';

const route = useRoute();
const country = ref(findCountryByAlpha3Code(route.params.alpha3Code));

function findCountryByAlpha3Code(alpha3Code) {
  return countries.find(countr => country.alpha3Code === alpha3Code);
}

function findCountryName(alpha3Code) {
  const country = findCountryByAlpha3Code(alpha3Code);
  return country ? country.name.common : alpha3Code;
}
</script>

<template>
  <div class="col-7">
    <img :src="`https://restcountries.eu/data/${country.alpha2Code.toLowerCase()}.svg`" alt="country flag" style="width: 300px" />
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital[0] }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km<sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="border in country.borders" :key="border">
                <router-link :to="`/list/${border}`">{{ findCountryName(border) }}</router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
