<script setup>
import { fetchAllCountries } from "@/api/countriesApi";
import { ref, onMounted } from 'vue'

const countries = ref([])
let loading = ref(true)

onMounted(async () => {
    countries.value = await fetchAllCountries()
    loading.value = false
    console.log(countries.value)
})


</script>
<template>
    <div v-if="loading">Loading...<br>
    </div>
    <div v-else>
        <!-- Bootstrap container wrapper div -->
        <div class="container">
            <!-- Bootstrap row wrapper div -->
            <div class="row">
                <!-- Countries List (Bootstrap column) -->
                <div class="col-5" style="max-height: 90vh; overflow: scroll">
                    <div class="list-group">
                        <router-link v-for="country in countries" :key="country.alpha3Code"
                            :to="{ name: 'countryDetail', params: { alpha3Code: country.alpha3Code } }"
                            class="list-group-item list-group-item-action">
                            <img
                                :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
                            <p>{{ country.name.official }}</p>
                        </router-link>
                    </div>
                </div>
                <!-- Country Details -->
                <router-view />
            </div>
        </div>
    </div>

</template>