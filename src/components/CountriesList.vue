<script setup>
import { ref, onMounted } from 'vue';
import { fetchCountryData } from '@/js/countryData.js';

const data = ref({});

onMounted(async () => {
  data.value = await fetchCountryData();
});

const getFlagUrl = (alpha2Code) => {
  return `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`;
}

</script>

<template class="container">
  <div class="row">
    <div class="col-5" style="max-height: 90vh; overflow: scroll">
      <div class="list-group">
        <div v-for="country in Object.values(data)" :key="country.alpha3Code" class="list-group-item list-group-item-action">
          <img :src="getFlagUrl(country.alpha2Code)" />
          <router-link :to="`/${country.alpha3Code}`">{{ country.name.common }}</router-link>
        </div>
      </div>
    </div>
    <div class="col-7">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
</style>