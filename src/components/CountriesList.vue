<template>
  <div class="col-5">
    <div class="list-group">
      <router-link
        v-for="country in countries"
        :key="country.alpha3Code"
        :to="'/list/' + country.alpha3Code"
        class="list-group-item list-group-item-action"
      >
        <img
          :src="
            'https://flagpedia.net/data/flags/icon/72x54/' +
            country.alpha2Code.toLowerCase() +
            '.png'
          "
        />
        <p>{{ country.name.common }}</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const countries = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://ih-countries-api.herokuapp.com/countries"
    );
    countries.value = response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
});
</script>

<style scoped>
.col-5{
  display: flex;
  gap:20px;
}
.list-group{
  width: 100%;
  max-width: 370px;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e5e5;
  overflow-y: scroll;
}
</style>
