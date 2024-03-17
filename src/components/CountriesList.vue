<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const countries = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
    const data = await response.json();
    countries.value = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
});

</script>

<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
      <div v-for="country in countries" :key="country.alpha3Code" class="list-group-item list-group-item-action">
        <RouterLink :to="`/list/${country.alpha3Code}`">
          <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
          <p>{{ country.name.common }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
  <RouterView />
</template>
