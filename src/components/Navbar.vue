<template>
    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
            <RouterLink class="navbar-brand" to="/">Lab-WikiCountries</RouterLink>
        </div>
    </nav>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  export default {
    name: "Navbar",
    components: {
      RouterLink,
    }
  };
  </script>
  
  <style>
  </style>