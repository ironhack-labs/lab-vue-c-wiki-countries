<script setup>

import countries from '../data/countries.json'

</script>

<template>
  <div class="list-group">
    <RouterLink
      v-for="country in countries"
      :key="country.alpha3Code"
      :to="`/countries/${country.alpha3Code}`"
    >
      {{ country.name.common }}
    </RouterLink>
  </div>
</template>