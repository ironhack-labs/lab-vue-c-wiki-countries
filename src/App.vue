<script setup>
import navbar from './components/navbar.vue';
import CountriesList from './components/CountriesList.vue';

</script>

<template>
  <div>
    <navbar/>
    <div class="container">
      <div class="row">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

