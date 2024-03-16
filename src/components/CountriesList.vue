<script setup>

async function _getCountryData() {
  const res = await fetch("https://ih-countries-api.herokuapp.com/countries")
  const json = await res.json()
  data.value = json
}

</script>

<template>

<h1>hello country list</h1>
<v-for></v-for>
</template>

<style scope>

</style>

