<template>
    <ul>
      <li
        v-for="country in countries"
        :key="country"
        @click="goToCountryDetails(country)"
      >
        {{ country }}
      </li>
    </ul>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  
  export default {
    name: "CountriesList",
    props: {
      countries: {
        type: Array,
        required: true,
      },
    },
    setup(props) {
      const router = useRouter();
  
      const goToCountryDetails = (country) => {
        router.push({ name: "CountryDetails", params: { countryName: country } });
      };
  
      return { goToCountryDetails };
    },
  };
  </script>
  <style>
  ul {
    list-style: none;
  }
  </style>
  