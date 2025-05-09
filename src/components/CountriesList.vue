<script setup>
import { ref, onMounted } from 'vue'

const countries = ref([])

onMounted(async () => {
  const response = await fetch('https://ih-countries-api.herokuapp.com/countries')
  countries.value = await response.json()
})
</script>

<template>
    <div class="countries-list">
      <h2>Countries</h2>
      <ul>
        <li v-for="country in countries" :key="country.alpha3Code">
          <router-link :to="`/${country.alpha3Code}`">
            {{ country.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>

