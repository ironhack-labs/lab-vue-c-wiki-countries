<script setup>
import { computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';
const props = defineProps({
    countriesList: {
        type: Array,
        required: true
    }
});

const route = useRoute();

const currrentCountry = computed(() => props.countriesList.filter(country => country.alpha3Code === route.params.alpha3Code));

</script>

<template>
    <div class="col-7">
        <img :src="`https://flagpedia.net/data/flags/w580/${currrentCountry[0].alpha2Code.toLowerCase()}.webp`" alt="country flag" style="width: 300px" />
        <h1>{{ currrentCountry[0].name.common }}</h1>
        <table class="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style="width: 30%">Capital</td>
                    <td>{{ currrentCountry[0].capital[0] }}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        {{ currrentCountry[0].area }} km <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <ul v-for="(borderCountry, index) in currrentCountry[0].borders" :key="index">
                            <li><router-link class="" :to="`/list/${borderCountry}`">{{ borderCountry }}</router-link></li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style></style>