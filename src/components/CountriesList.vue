<script setup>
import countries from './../countries.json'

</script>
<template>
    <div>
        <div class="row">
            <div class="col">
                <div v-for="country in countries" :key="country.alpha3Code">
                    <RouterLink :to="{ name: 'details', params: { code: country.alpha3Code}}">
                        <div>
                            <img
                                :src=" 'https://flagpedia.net/data/flags/icon/72x54/' + country.alpha2Code.toLowerCase() + '.png' ">
                            <p>{{country.name.common}}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
            <div class="col">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style>
</style>