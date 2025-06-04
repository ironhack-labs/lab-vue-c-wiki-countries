<template>
  <div v-if="country" class="col-7">
    <h1>{{ country.name.common }}</h1>

    <img
      v-if="country.alpha2Code"
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      alt="Flag"
      width="100"
    />
    <table class="table">
      <tbody>
        <tr>
          <td>Capital</td>
          <td>{{ country.capital?.[0] }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km²</td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="border in country.borders" :key="border">
                {{ border }}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <p>Loading country data or country not found...</p>
  </div>
</template>

<script setup>
import countries from "../countries.json"; 
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const country = computed(() =>
  countries.find((c) => c.alpha3Code === route.params.alpha3Code)
);
</script>
