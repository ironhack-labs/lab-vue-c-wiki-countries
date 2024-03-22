<template>
  <div class="col-7" v-if="country">
    <img
      :src="
        'https://flagpedia.net/data/flags/icon/72x54/' +
        country.alpha2Code.toLowerCase() +
        '.png'
      "
      alt="country flag"
    />
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <tbody>
        <tr>
          <td class="capital">Capital</td>
          <td>{{ country.capital }}</td>
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
                <router-link :to="`/list/${border}`">{{
                  getCountryName(border)
                }}</router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { onMounted } from "vue";

const route = useRoute();
const countryCode = ref(route.params.alpha3Code);
const countries = ref([]);
const country = computed(() =>
  countries.value.find((country) => country.alpha3Code === countryCode.value)
);

const getCountryName = (alpha3Code) => {
  const country = countries.value.find(
    (country) => country.alpha3Code === alpha3Code
  );
  return country ? country.name.common : "";
};

async function fetchData() {
  try {
    const response = await axios.get(
      "https://ih-countries-api.herokuapp.com/countries"
    );
    countries.value = response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

watch(
  () => route.params.alpha3Code,
  () => {
    countryCode.value = route.params.alpha3Code;
  }
);

onMounted(async () => {
  fetchData();
});
</script>

<style scoped>
.col-7  {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border : 1px solid gray;
  width: 400px;
}
.capital {
  width: 30%;
}
a {
  width: 100%;
  height: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px 0;
  overflow: hidden;
  border-bottom: 1px solid #e8e5e5;
  text-decoration: none;
  color: black;
}
.col-7 img {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-top: 10px;
}

</style>
