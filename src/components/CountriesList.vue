<script setup>

import { ref, onMounted } from 'vue';
import { countriesAPI } from '../js/countriesAPI.js';

const countries = ref({});

onMounted(async () => {
  countries.value = await countriesAPI();
});


</script>

<template>
    <!-- Countries List (Bootstrap column) -->
    <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
            <router-link v-for="country in Object.values(countries)" :key="country.alpha3Code" class="list-group-item list-group-item-action" :to="`/list/${country.alpha3Code}`">
                <img v-bind:src="`https://flagpedia.net/data/flags/icon/72x54/` + country.alpha2Code.toLowerCase() + `.png`" />
                <p>{{ country.name.common}}</p>
            </router-link>
        </div>
    </div>
    <router-view />
</template>

<style></style>