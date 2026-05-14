<template>
  <div v-if="country">
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ Array.isArray(country.capital) ? country.capital.join(", ") : country.capital }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km<sup>2</sup></td>
        </tr>
        <tr v-if="country.borders && country.borders.length">
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="code in country.borders" :key="code">
                <router-link :to="`/list/${code}`">{{ code }}</router-link>
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

async function loadCountry(code) {
  if (!code) return;
  const response = await fetch("/countries.json");
  const list = await response.json();
  country.value = list.find((c) => c.alpha3Code === code) || null;
}

watch(
  () => route.params.alpha3Code,
  (code) => loadCountry(code),
  { immediate: true }
);
</script>
