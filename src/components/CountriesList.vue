<script setup>

import { ref } from 'vue';


const props = defineProps({
  countries: {
    type: Object,
    required: true
  }
});


</script>

<template>
    <!-- Countries List (Bootstrap column) -->
    <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
            <a v-for="country in countries" :country="country" class="list-group-item list-group-item-action" :href="country.alpha3Code">
                <img v-bind:src="`https://flagpedia.net/data/flags/icon/72x54/` + country.alpha2Code.toLowerCase() + `.png`" />
                <p>{{ country.name.common}}</p>
            </a>
        </div>
    </div>
</template>

<style></style>