<template>
  <section class="flex">
    <ul>
      <li v-for="(country, index) in countries" :key="index">
        <Router-link :to="`/list/${country.alpha3Code}`">{{
          country.name.common
        }}</Router-link>
      </li>
    </ul>
    <router-view></router-view>
  </section>
</template>

<script setup>
const props = defineProps({ countries: Array });
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
