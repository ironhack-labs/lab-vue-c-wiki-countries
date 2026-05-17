<template>
  <div>
    <!-- Loading state -->
    <div v-if="loading" class="text-center mt-4">
      Loading countries...
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="text-danger text-center mt-4">
      Failed to load countries.
    </div>

    <!-- Countries list -->
    <div v-else class="list-group">
    <router-link
  v-for="country in countries"
  :key="country.alpha3Code"
  :to="'/' + country.alpha3Code"
  class="list-group-item list-group-item-action d-flex align-items-center"
>
  <img
    v-if="country.alpha2Code"
    :src="`https://flagpedia.net/data/flags/icon/72x54/${(country.alpha2Code || '').toLowerCase()}.png`"
    :alt="country.name + ' flag'"
    class="me-3"
    style="width: 36px;"
  />:

  {{ country.name }}

         </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const countries = ref([]);
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    error.value = false;

    const res = await fetch("https://restcountries.com/v3.1/all");

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const data = await res.json();

    countries.value = data.map(c => ({
      alpha2Code: c.cca2 ?? "",
      alpha3Code: c.cca3 ?? "",
      name: c.name?.common ?? "N/A",
    }));

    // ✅ safe sorting
    countries.value.sort((a, b) =>
      (a.name ?? "").localeCompare(b.name ?? "")
    );

  } catch (err) {
    console.error("Failed to fetch countries:", err);
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>