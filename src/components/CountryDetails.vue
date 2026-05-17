<template>
  <div v-if="country">
    <h1>{{ country.name?.common || country.name }}</h1>

    <img
      :src="flagUrl"
      alt="flag"
      class="mb-3"
    />

    <p>
      <strong>Capital:</strong>
      {{ country.capital?.[0] || country.capital || "N/A" }}
    </p>

    <p>
      <strong>Area:</strong>
      {{ country.area || "N/A" }}
    </p>

    <p>
      <strong>Borders:</strong>
      {{ country.borders?.join(", ") || "None" }}
    </p>
  </div>

  <div v-else>
    <p>Loading country...</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const country = ref(null);

const flagUrl = computed(() => {
  const code = country.value?.alpha2Code?.toLowerCase();

  return code
    ? `https://flagpedia.net/data/flags/icon/72x54/${code}.png`
    : "";
});

async function fetchCountry(code) {
  if (!code) return;

  try {
    const response = await fetch(
      `https://ih-countries-api.herokuapp.com/countries/${code}`
    );

    country.value = await response.json();

  } catch (error) {
    console.error("Error fetching country:", error);
  }
}

watch(
  () => route.params.alpha3Code,
  (newCode) => {
    fetchCountry(newCode);
  },
  { immediate: true }
);
</script>
