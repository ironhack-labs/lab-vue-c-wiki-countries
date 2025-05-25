<template>
  <div v-if="country">
    <h1>{{ country.name.common }}</h1>
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      :alt="country.name.common"
      width="100"
    />
    <ul class="list-group mt-3">
      <li class="list-group-item"><strong>Capital:</strong> {{ country.capital[0] }}</li>
      <li class="list-group-item"><strong>Área:</strong> {{ country.area }} km²</li>
      <li class="list-group-item">
        <strong>Fronteras:</strong>
        <span v-if="country.borders.length">
          <span v-for="border in country.borders" :key="border">
            {{ border }}
          </span>
        </span>
        <span v-else>
          No tiene fronteras
        </span>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const country = ref(null);

const fetchCountry = async (code) => {
  country.value = null;
  const res = await fetch(`https://ih-countries-api.herokuapp.com/countries/${code}`);
  country.value = await res.json();
};

onMounted(() => {
  fetchCountry(route.params.alpha3Code);
});

watch(
  () => route.params.alpha3Code,
  (newCode) => {
    fetchCountry(newCode);
  }
);
</script>

<style>
.list-group-item {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
}
</style>