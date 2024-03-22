<template>
  <div class="app">
    <NavBar />
    <div class="container mt-3">
      <div class="row">
        <div class="col-5">
          <router-view />
          <!-- CountriesList.vue -->
          
        </div>
      
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/Navbar.vue";
</script>

<style scoped>
.container{
margin: 10px 200px;
align-items: center;
justify-content: space-between
}
</style>
