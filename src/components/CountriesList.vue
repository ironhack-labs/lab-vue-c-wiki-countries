<template>
  <div class="countries-wrapper">
    <div>
      <ul v-if="countries.length">
        <li v-for="country in countries" :key="country.alpha3Code">
          <router-link
            :to="{ name: 'detail', params: { alpha3Code: country.alpha3Code } }"
          >
            <img
              :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
              alt="Flag"
            />
            {{ country.name.common }}
            <hr />
          </router-link>
        </li>
      </ul>
    </div>
    <div class="details-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "CountriesList",
  data() {
    return {
      countries: [],
    };
  },

  async created() {
    const response = await fetch(
      "https://ih-countries-api.herokuapp.com/countries"
    );
    this.countries = await response.json();
  },
};
</script>

<style scooped>
.countries-wrapper {
  display: flex;
  flex-direction: row;
  min-width: 30%;
}
ul {
  list-style-type: none;
  padding-right: 40px;
}
.details-wrapper {
  position: fixed;
  right: 15%;
}
</style>
