<template>
  <div v-if="country">
    <section class="country-header">
      <img :src="country.flags.png" alt="country flag" class="flag-img" />
      <h1 class="country-name">{{ country.name.common }}</h1>
    </section>
    <table class="table">
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital?.[0] }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km<sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="border in country.borders" :key="border">
                <router-link :to="`/list/${border}`">{{ border }}</router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const country = ref(null);

const fetchCountry = async (code) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,capital,area,borders`,
  );
  const data = await res.json();
  country.value = data;
};

watch(
  () => route.params.cca2,
  (code) => {
    if (code) fetchCountry(code);
  },
  { immediate: true },
);
</script>

<style scoped>
.country-header {
  margin: 0 0 1rem 8rem;
}

.country-name {
  text-align: center;
  max-width: 300px;
  margin-top: 0.5rem;
}

.flag-img {
  width: 100%;
  max-width: 300px;
  border: 0.8px solid rgb(184, 183, 183);
  border-radius: 2px;
}
</style>
