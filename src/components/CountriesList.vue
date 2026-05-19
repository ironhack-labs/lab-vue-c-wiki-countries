<template>
  <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
          <router-link
            v-for="country in countries"
            :key="country.cca2"
            :to="`/list/${country.cca2}`"
            class="list-group-item list-group-item-action country-link"
          >
            <img :src="country.flags.png" class="img-fluid flag-img" />
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
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,cca2",
  );
  const data = await response.json();
  countries.value = data;
});
</script>

<style scoped>
.country-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

.flag-img {
  max-width: 4em;
  border: 0.8px solid rgb(184, 183, 183);
  border-radius: 2px;
  margin-bottom: 0.5rem;
}
</style>
