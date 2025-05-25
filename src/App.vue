<template>
  <div class="app">
    <NavBar />
    <router-view :countries="countries" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NavBar from "./components/NavBar.vue";

const countries = ref([]);

onMounted(async () => {
  const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
  countries.value = await res.json();
});
</script>

<style></style>