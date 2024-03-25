<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { countriesAPI } from '../js/countriesAPI.js'

const route = useRoute()

const loading = ref(false)
const countries = ref(null)
const countryDetails = ref(null)

async function fetchCountries() {
    loading.value = true
    try {
        countries.value = await countriesAPI()
    } catch (error) {
        console.error('Failed to fetch details', error)
        countries.value = []
    } finally {
        loading.value = false
    }
}

onMounted(async () => {
    await fetchCountries()
})

watch(
    () => route.params.alpha3Code,
    (newId, oldId) => {
        const selectedCountry = countries.value.find(country => country.alpha3Code === newId)
        countryDetails.value = selectedCountry ? { ...selectedCountry } : null
    }
)
</script>

<template>
    <!-- Country Details (Bootstrap column) -->
    <div class="col-7" v-if="countryDetails">
        <img :src="'https://flagcdn.com/' + countryDetails.alpha2Code.toLowerCase() + '.svg'" style="width: 300px" />
        <h1>{{ countryDetails.name.common }}</h1>
        <table class="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style="width: 30%">Capital</td>
                    <td>{{ countryDetails.capital[0] }}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        {{ countryDetails.area }} km<sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                            <li v-for="border in countryDetails.borders" :key="border">
                                <router-link :to="`/list/${border}`">{{ border }}</router-link>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        Loading...
    </div>
</template>

<style></style>
