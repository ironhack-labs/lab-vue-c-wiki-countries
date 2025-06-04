<template>
  <div class="row">
    <CountriesList :countries="countries" />
    <CountryDetails :country="getSelectedCountry()" v-if="selectedCode" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import countriesData from '/public/countries.json';
import CountriesList from '../components/CountriesList.vue';
import CountryDetails from '../components/CountryDetails.vue';

const route = useRoute();
const countries = ref(countriesData);
const selectedCode = computed(() => route.params.alpha3Code);

const getSelectedCountry = () =>
  countries.value.find((c) => c.alpha3Code === selectedCode.value);
</script>
