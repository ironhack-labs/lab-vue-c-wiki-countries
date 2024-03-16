<script setup>
import { ref } from "vue";
// const countries = ref([])
const data = ref({});

async function _getCountries() {
  const response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );
  const json = await response.json();
  data.value = json;
}

const getFlagUrl = (alpha2Code) => {
      return `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`;
    };

console.log(_getCountries());
</script>
<template class="container">
  <div class="row">
    <div class="col-5" style="max-height: 90vh; overflow: scroll">
      <div class="list-group">
        <div v-for="country in data" :key="country" class="list-group-item list-group-item-action">
          <img :src="getFlagUrl(country.alpha2Code)" />
          <router-link to="/`${{ country.alpha3Code }}">{{ country.name.common }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
