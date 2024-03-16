<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    countriesList: {
        type: Array,
        required: true
    }
});

</script>

<template>
    <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group" v-for="(country, index) in props.countriesList" :key="index">
            <router-link class="list-group-item list-group-item-action" :to="`/list/${country.alpha3Code}`">
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
                <p>{{ country.name.common }}</p>
            </router-link>
        </div>
    </div>
    <router-view />
</template>

<style></style>