
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const country = ref([])
const route = useRoute()

const countryData = async () => {
  try {
    const res = await fetch('/countries.json')
    const data = await res.json()

    country.value = data.find(pais => pais.alpha3Code === route.params.alpha3Code)

  } catch (error) {
    console.error('Errorsito cargando el JSON:', error)
  }
}
onMounted(() => {
  countryData()
})

watch(() => route.params.alpha3Code, countryData)
</script>


<template>

<div v-if="country" class="col-7">
  <img :src= "`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" alt="country flag" style="width: 100px"/>
            <h1>{{ country.name.common }}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style="width: 30%">Capital</td>
                  <td>{{ country.capital[0] }}</td>
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
                    <ul v-for= "border in country.borders">
                      <li><router-link :to="`/country/${country.alpha3Code}`"/>{{ border }}</li>
                    </ul>  
                  </td>
                </tr>
              </tbody>
            </table>
</div>

</template>