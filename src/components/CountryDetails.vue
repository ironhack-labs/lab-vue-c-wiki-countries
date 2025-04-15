<script setup>
// import countriesData from '../assets/countries.json'
// import {reactive, ref, onMounted, watch} from 'vue'
// import { RouterLink, RouterView, useRoute } from 'vue-router'

// const route = useRoute()
// const alpha3Code = ref(route.params.alpha3Code)
// let country = reactive({})
// let borders = reactive([])

// const updateCountryData = () =>{
//     const selectedCountry = countriesData.find((c) => c.alpha3Code === alpha3Code.value);
//     country = selectedCountry;
//     borders = selectedCountry?.borders
// }


// watch(
//     ()=> route.params.alpha3Code, (newAlpha3Code)=>{
//         alpha3Code.value = newAlpha3Code;
//         updateCountryData();
//     }
// )

// ////////////

import { ref, watch } from 'vue';
import { useRoute, RouterLink, RouterView } from 'vue-router';
import countriesData from '../assets/countries.json';

const route = useRoute();
const alpha3Code = ref(route.params.alpha3Code);


const country = ref(null);
const borders = ref([]);



const updateCountryData = () => {
  const selectedCountry = countriesData.find((c) => c.alpha3Code === alpha3Code.value);
  country.value = selectedCountry;

  
  borders.value = selectedCountry.borders.map((borderCode)=>{
    const borderCountry = countriesData.find((c) => c.alpha3Code === borderCode)
    return {
      name: borderCountry?.name.common || 'Unknown',
      alpha3Code: borderCode,
    };
  });
  
  
};


updateCountryData();


watch(() => route.params.alpha3Code, (newAlpha3Code) => {
  alpha3Code.value = newAlpha3Code;
  updateCountryData();
});


</script>

<template>

    <div class="col-7">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 100px"/>
            <h1>{{country.name.common}}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{country.capital[0]}}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {{country.area}} km <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        <li v-for="border in borders" :key="border.alpha3Code" >
                            <RouterLink :to="'/' + border.alpha3Code">
                                {{ border.name }}
                            </RouterLink>
                        </li>

                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
          </div>


    
</template>



<style scoped>

</style>