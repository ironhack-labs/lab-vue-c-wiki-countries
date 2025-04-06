<template>
    <div v-if="country">
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
        style="width: 100px"
      />
      <h1>{{ country.name.common }}</h1>
      <table class="table">
        <tbody>
          <tr>
            <td style="width: 30%">Capital</td>
            <td>{{ country.capital[0] }}</td>
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
  import { ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const country = ref(null)
  
  watch(
    () => route.params.alpha3Code,
    async (newCode) => {
      const res = await fetch(`https://ih-countries-api.herokuapp.com/countries/${newCode}`)
      country.value = await res.json()
    },
    { immediate: true }
  )
  </script>
  