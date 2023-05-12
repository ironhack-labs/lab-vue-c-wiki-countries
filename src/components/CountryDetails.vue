<script setup>
import countries from './../countries.json'

</script>
<template>
    <div class="row">
        <div v-for="country in countries" :key="country.alpha3Code">
            <div v-if="$route.params.code === country.alpla3Code">
                <img :src=" 'https://flagpedia.net/data/flags/icon/72x54/'+ country.alpha2Code.toLowerCase() + '.png' ">
                <h1>{{country.name.common}}</h1>
                <hr />
                <p>Capital 
                    <span v-for="cap in country.capital" v-bind:key="cap"> - {{cap}}</span>
                </p>
                <hr />
                <p>Area 
                    <span>{{country.area}} km<sup>2</sup></span>
                </p>
                <hr />
                <p>Borders</p>
                <div v-for="border in country.borders"  v-bind:key="border">
                    <div v-for="country2 in countries" v-bind:key="country2.alpha3Code">
                        <li v-if="border === country2.alpha3Code">
                            <router-link :to="{ name: 'details', params: { code: country2.alpha3Code }  }">
                                {{country2.name.common}}
                            </router-link>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>