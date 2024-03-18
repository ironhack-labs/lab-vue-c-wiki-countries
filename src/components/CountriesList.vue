<script setup>
import { ref, onMounted } from 'vue';

const data = ref({});

async function _getCountries() {
  try {
    const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
    const json = await response.json();
    data.value = json;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
}

const getFlagUrl = (alpha2Code) => {
  return `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`;
}

onMounted(_getCountries);
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
    <div>
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>