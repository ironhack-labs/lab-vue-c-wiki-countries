
<script setup>
import { RouterLink } from 'vue-router';

const props= defineProps(
    {countries:Array}
)
</script>


<template>
  <ul>
    <li v-for="(country, index) in countries " :key= "index">
        <RouterLink :to="`/list/${country.alpha3Code}`">{{ country.name.common }}</RouterLink>
    
    </li>
  </ul>
  <router-view></router-view>
</template>

<style scoped></style>
