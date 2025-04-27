<template>
  <div class="country-details" v-if="country">
    <h2>{{ country.name.common }}</h2>

    <!-- Bandera -->
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      :alt="country.name.common"
    />

    <p><strong>Capital:</strong> {{ country.capital?.[0] || 'N/A' }}</p>
    <p><strong>Área:</strong> {{ country.area }} km²</p>
    <p><strong>Código 3 letras:</strong> {{ country.alpha3Code }}</p>
  </div>

  <p v-else>Cargando país...</p>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router"; // para acceder a la URL

const route = useRoute(); // accede a los parámetros de la URL
const country = ref(null); // para guardar los datos del país

// Observamos el parámetro alpha3Code
watch(
  () => route.params.alpha3Code,
  async (code) => {
    if (code) {
      try {
        const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${code}`);
        const data = await response.json();
        country.value = data;
      } catch (error) {
        console.error("Error al cargar país:", error);
      }
    }
  },
  { immediate: true } // se ejecuta también la primera vez
);
</script>

<style scoped>
.country-details {
  padding: 1rem;
}

img {
  margin: 1rem 0;
  width: 72px;
  height: 54px;
}
</style>

  
  