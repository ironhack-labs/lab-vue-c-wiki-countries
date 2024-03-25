<script setup>
import { useRoute } from 'vue-router'
import { ref, watch, computed, inject } from 'vue'

const countries = inject('countries')

const route = useRoute()

const alpha3Code = ref(route.params.alpha3Code)

watch(() => route.params.alpha3Code, (newValue) => {
  alpha3Code.value = newValue
})

const country =  computed(() => {
  return countries.value.find((country) => country.alpha3Code === alpha3Code.value)
})

function countryCommonName(alpha3Code) {
  const countryData = countries.value.find(country => country.alpha3Code === alpha3Code)
  return countryData.name.common
}
</script>

<template>
  <!-- Country Details (Bootstrap column) -->
  <div class="col-7">
    <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" />
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
              <li v-for="borderCountryCode in country.borders" :key="borderCountryCode">
                <router-link :to="{ name: 'countryDetail', params: { alpha3Code: borderCountryCode } }">
                  {{ countryCommonName(borderCountryCode) }}
                </router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
img {
  width: 300px;
}
</style>