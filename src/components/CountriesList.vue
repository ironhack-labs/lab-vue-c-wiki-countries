<script setup>
import { ref, onMounted } from "vue";

const countries = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://ih-countries-api.herokuapp.com/countries"
    );
    countries.value = (await response.json()).sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  } catch (error) {
    console.error("Error loading countries:", error);
  }
});
</script>

<template>
  <div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
      <router-link
        v-for="country in countries"
        :key="country.alpha3Code"
        :to="`/list/${country.alpha3Code}`"
        class="list-group-item list-group-item-action"
      >
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          :alt="country.name.common"
        />
        {{ country.name.common }}
      </router-link>
    </div>

    <router-view />
  </div>
</template>
    
  <style>
.list-group-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

  