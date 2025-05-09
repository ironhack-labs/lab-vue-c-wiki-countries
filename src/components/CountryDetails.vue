<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const country = ref(null)

watchEffect(async () => {
  const alpha3Code = route.params.alpha3Code
  const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
  country.value = await response.json()
})
</script>

<template>
    <div v-if="country">
      <h2>{{ country.name.common }}</h2>
      <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="Flag" />
      <p><strong>Capital:</strong> {{ country.capital[0] }}</p>
      <p><strong>Area:</strong> {{ country.area }} km²</p>
      <p><strong>Borders:</strong></p>
      <ul>
        <li v-for="border in country.borders" :key="border">
          <router-link :to="`/${border}`">{{ border }}</router-link>
        </li>
      </ul>
    </div>
  </template>