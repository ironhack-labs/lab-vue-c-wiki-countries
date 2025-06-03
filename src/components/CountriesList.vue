<!-- src/components/CountriesList.vue -->
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const countries = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
    countries.value = response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
});
</script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
          <router-link
            v-for="country in countries"
            :key="country.alpha3Code"
            :to="'/country/' + country.alpha3Code"
            class="list-group-item list-group-item-action"
          >
            <img
              :src="'https://flagcdn.com/24x18/' + country.alpha2Code.toLowerCase() + '.png'"
              alt="flag"
              class="me-2"
            />
            {{ country.name.common }}
          </router-link>
        </div>
      </div>
      <div class="col-7">
        <router-view />
      </div>
    </div>
  </div>
</template>

