<script setup>

import { ref, onMounted,watch } from 'vue';

const countries = ref([]); //definisce una variabile reattiva, memorizza i dati dei paesi ottenuti dall'api

const _getCountryList = async () => { //definiamo una funzione asincrona
    const response = await fetch('https://ih-countries-api.herokuapp.com/countries'); //fa una richiesta get utilizzando la funzione fetch e guarda dentro a responde il risultato della richiesta 
    const data = await response.json(); //prende la responde e la converte in formato json e la salva dentro a data
    countries.value = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
}

onMounted(() => {
    _getCountryList();
});

</script>

<template>
    <div class="row ml-3">
        <section class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group">
                <router-link v-for="country in countries" :key="country.alpha3Code" :to="`/list/${country.alpha3Code}`" class="list-group-item">
                    <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
                        style="width: 50px" />
                    <p>{{ country.name.common }}</p>
                </router-link>
            </div>
        </section>
    </div>

</template>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
.list-group-item {
  padding: 0;
}

</style>
