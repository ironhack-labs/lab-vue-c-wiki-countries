<template>
  <div class="app">
    <navbar></navbar>
    <router-view :countries="countries" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {

  components: {

    Navbar

  },

  data() {

    return {

      countries: []

    };

  },

  async mounted() {

    try {

      const response = await fetch(

        "https://ih-countries-api.herokuapp.com/countries"

      );

      this.countries = await response.json();

    } catch (error) {

      console.error("Error loading countries:", error);

    }

  }

};
</script>

<style>

</style>