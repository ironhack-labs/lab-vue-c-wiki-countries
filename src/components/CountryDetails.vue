<template>
  <div class="countriy-details-wrapper">
    <img
      class="info-rows"
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      alt="Flag"
    />
    <h1 class="info-rows">{{ this.country.name }}</h1>
    <div class="info-rows">Capital: {{ this.country.capital[0] }}</div>
    <hr />
    <div class="info-rows">Area: {{ this.country.area }}km²</div>
    <hr />
    <div class="borders-wrapper info-rows">
      <p>Borders</p>
      <ul>
        <li v-for="border in this.country.borders" :key="border.alpha3Code">
          <router-link
            :to="{ name: 'detail', params: { alpha3Code: border.alpha3Code } }"
            >{{ border.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryDetail",
  data() {
    return {
      country: {},
      countries: [],
    };
  },

  async created() {
    const response = await fetch(
      "https://ih-countries-api.herokuapp.com/countries"
    );
    this.countries = await response.json();

    this.filterCountries();
  },

  watch: {
    "$route.params.alpha3Code": {
      handler() {
        if (this.$route.params.alpha3Code) {
          this.filterCountries();
        }
      },
    },
  },
  methods: {
    filterCountries() {
      this.country = this.countries.map((country) => {
        const {
          alpha3Code,
          alpha2Code,
          area,
          _id,
          capital,
          name: { common },
          borders,
        } = country;
        return {
          alpha3Code,
          alpha2Code: alpha2Code.toLowerCase(),
          area,
          _id,
          capital,
          name: common,
          borders: borders.map((countryBorder) => {
            const {
              name: { common },
            } = this.countries.find((co) => co.alpha3Code === countryBorder);
            return {
              name: common,
              alpha3Code: countryBorder,
            };
          }),
        };
      });

      this.country = this.country.find(
        (country) => country.alpha3Code === this.$route.params.alpha3Code
      );
    },
  },
};
</script>

<style scooped>
template {
  position: fixed;
  max-height: fit-content;
}
.country-details-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 50%;
  max-height: fit-content;
  position: sticky;
}
.borders-wrapper {
  display: flex;
  flex-direction: row;
}
ul {
  list-style-type: none;
}
.info-rows {
  display: flex;
  justify-content: center;
}
</style>
