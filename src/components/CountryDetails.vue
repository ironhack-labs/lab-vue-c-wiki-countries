<template>
  <div v-if="country" class="country-details">

    <h1>{{ country.name.common }}</h1>

    <p><strong>Capital:</strong> {{ country.capital?.[0] }}</p>
    <p><strong>Area:</strong> {{ country.area }} km²</p>

    <p><strong>Borders:</strong></p>

    <ul>
      <li v-for="border in country.borders || []" :key="border">
        {{ border }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "CountryDetails",

  data() {
    return {
      country: null
    };
  },

  methods: {
    async fetchCountry() {
      const code = this.$route.params.alpha3Code;

      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${code}`
      );

      this.country = await response.json();
    }
  },

  mounted() {
    this.fetchCountry();
  },

  watch: {
    "$route.params.alpha3Code"() {
      this.fetchCountry();
    }
  }
};
</script>