<template>
    <div>
      <div v-if="this.countries" className="row">
        <div class="col-5" style="max-height: 100vh; overflow: scroll">
        <div class="list-group">
          <ul>
            <li v-for="(country,index) in this.countries" :key="index">
              <router-link
                :to="`/list/${country.alpha3Code}`"
                class="list-group-item list-group-item-action"
              >
                <img
                  :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
                />
                <p>{{ country.name.common }}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <router-view />
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CountriesList",
    data() {
      return {
        countries: null,
      };
    },
    methods: {
      async fetchCountries() {
        const response = await fetch("https://ih-countries-api.herokuapp.com/countries");
        const finalResponse = await response.json();
        this.countries = finalResponse.sort((a,b) => {
          return a.name.common.localeCompare(b.name.common);
        });
      },
    },
    created() {
      this.fetchCountries();
    }
  };
  </script>
  
  <style></style>