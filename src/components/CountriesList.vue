<template>
  <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
          <router-link
            v-for="country in countries"
            :key="country.alpha3Code"
            class="list-group-item list-group-item-action"
            :to="`/list/${country.alpha3Code}`"
          >
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
            <p>{{ country.name.common }}</p>
          </router-link>
        </div>
      </div>

      <div class="col-7">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const countries = ref([]);

onMounted(async () => {
  const response = await fetch("/countries.json");
  countries.value = await response.json();
});
</script>
