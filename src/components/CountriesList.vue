<template>
    <div class="countries-list">
        <h1>Countries</h1>
        <ul>
            <li v-for="country in countries" :key="country.alpha3Code">
                <router-link :to="`/list/${country.alpha3Code}`">
                    {{ country.name.common }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "CountriesList",
  data() {
    return {
      countries: []
    };
  },
  async mounted() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      this.countries = await response.json();
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }
};
</script>