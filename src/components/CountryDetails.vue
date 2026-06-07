<script setup>
import { useRoute } from "vue-router";
import { reactive, computed, watch } from "vue";
import countries from "/src/countries.json";
const route = useRoute();

//const country = computed(() => countries.find((country) => country.alpha3Code === route.params.alpha3Code) );
//reactive( countries.find((country) => country.alpha3Code === route.params.alpha3Code) );

const country = reactive(countries.find((country) => country.alpha3Code === route.params.alpha3Code));

watch(route, (newRoute) => {
    const newCountry = countries.find((country) => country.alpha3Code === newRoute.params.alpha3Code);
    Object.assign(country, newCountry);
});

</script>

<template>
    <!-- Country Details (Bootstrap column) -->
          <div class="col-7">
            <img :src="`https://flagpedia.net/data/flags/w1160/${country.alpha2Code.toLowerCase()}.webp`" alt="country flag" style="width: 300px"/>
            <h1>{{ country.name.common }}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td 
                    v-for="city in country.capital" :key="city"
                  >
                    {{ city }}
                  </td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {{ country.area }} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li v-for="border in country.borders" :key="border">
                        <RouterLink :to="`/${border}`">{{ countries.find((country) => country.alpha3Code === border).name.common }}</RouterLink>
                      </li>
                      
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
</template>