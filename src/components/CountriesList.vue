<script setup>
import countriesData from '@/data/data';
console.log(countriesData);
</script>

<template>
    <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group" v-for="(country, index) in countriesData" :key="index">
            <router-link class="list-group-item list-group-item-action" :to="`/list/${country.code}`">
                <img :src="country.src" />
                <p>{{ country.country }}</p>
            </router-link>
        </div>
    </div>
    <router-view />
</template>

<style></style>