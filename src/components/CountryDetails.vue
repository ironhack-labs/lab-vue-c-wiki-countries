<template>
    <div class="col-7">
      <img
        v-bind:src="`https://flagpedia.net/data/flags/w702/${alpha2Code.toLowerCase()}.png`"
        alt="country flag"
        style="width: 300px"
      />
      <h1>{{ name }}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style="width: 30%">Capital</td>
            <td>{{ capital }}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{{ area }} km <sup>2</sup></td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <p v-if="borders.length === 0">
                Este pais no tiene paises fronterizos.<br/>Quizas se trata de una isla...
              </p>
              <ul v-else>
                <li v-for="(border, index) in borders" :key="index">
                  <router-link :to="`/list/${border}`">{{ border }}</router-link>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
    
  export default {
    name: "CountryDetails",
    data() {
      return {
        name: "",
        capital: "",
        alpha3Code: "",
        alpha2Code: "",
        area: "",
        borders: [],
        countryInfo: {},
      };
    },
    methods: {
      async getCountryByAlphaCode() {
        console.log("estoy dentro de getCountryByAlphaCode");
        this.alpha3Code = this.$route.params.alpha3Code;
        const response = await fetch(
          `https://ih-countries-api.herokuapp.com/countries/${this.alpha3Code}`
        );
        
        const finalResponse = await response.json();
        console.log(finalResponse);
        this.name = finalResponse.name.common;
        this.capital = finalResponse.capital[0];
        this.area = finalResponse.area;
        this.borders = finalResponse.borders;
        this.alpha2Code = finalResponse.alpha2Code;
        this.countryInfo = finalResponse;
      },
    },
    mounted() {
      this.getCountryByAlphaCode();
    },
    computed: {
      countryCode() {
        return this.$route.params.alpha3Code;
      },
    },
    watch: {
      countryCode(newCountryCode) {
        this.getCountryByAlphaCode();
      },
    },
  };
  </script>
  
  <style></style>