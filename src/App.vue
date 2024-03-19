<script setup>

import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import CountryDetails from './components/CountryDetails.vue';
import CountriesList from './components/CountriesList.vue';

</script>

<template>

  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
  </head>

  <body>
    <div class="app">
      <!-- Example of what could be rendered -->

      <div>
        <!-- Navbar -->
        <Navbar title="LAB -" />
        <!-- Bootstrap container wrapper div -->
        <div class="container">
          <!-- Bootstrap row wrapper div -->
          <div class="row">

            <CountriesList />

            <CountryDetails />

          </div>
        </div>
      </div>
    </div>
  </body>

  </html>

</template>

<style></style>