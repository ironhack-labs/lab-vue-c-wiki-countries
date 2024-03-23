<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5" style="max-height: 90vh; overflow: auto">
        <div class="list-group">
          <div v-for="country in Object.values(data)" :key="country.alpha3Code" class="list-group-item list-group-item-action">
            <img :src="getFlagUrl(country.alpha2Code)" alt="Flag" class="flag-icon" />
            <router-link :to="`/${country.alpha3Code}`" class="country-link">{{ country.name.common }}</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <router-view />
      </div>
    </div>
  </div>
</template>

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

<style scoped>
.flag-icon {
  width: 36px;
  height: auto;
  margin-right: 10px;
}

.country-link {
  text-decoration: none;
  color: #333;
}

.list-group-item {
  display: flex;
  align-items: center;
}
</style>
