<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import countries from '../data/countries.json'

const route = useRoute()

const country = computed(() => {
  return countries.find(c => c.alpha3Code === route.params.alpha3Code)
})
</script>

<template>
  <div v-if="country">
    <h1>
      {{ country.name.common }}
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
        :alt="country.name.common"
      />
    </h1>

    <p><strong>Capital:</strong> {{ country.capital?.[0] }}</p>
    <p><strong>Region:</strong> {{ country.region }}</p>
    <p><strong>Population:</strong> {{ country.population }}</p>
  </div>

  <div v-else>
    <p>Loading country...</p>
  </div>
</template>