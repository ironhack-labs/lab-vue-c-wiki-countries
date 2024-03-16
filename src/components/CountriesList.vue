<script setup>

import { ref } from 'vue';

const countries = ref({});

async function _getCountryData() {
    const res = await fetch("https://ih-countries-api.herokuapp.com/countries");
    const json = await res.json();
    countries.value = json;
}

console.log(_getCountryData())

</script>

<template>
<div class="row ml-3">
    <section class="col-5" style="max-height: 90vh; overflow: scroll">

        <router-link v-for="country in countries" :key="country.alpha3Code" :to="`/list/${country.alpha3Code}`">
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" style="width: 50px" />
            <p>{{ country.name.common }}</p>
        </router-link>
    </section>
</div>

</template>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
</style>
