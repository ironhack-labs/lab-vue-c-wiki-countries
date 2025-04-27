<template>
  <div class="app">
    <NavBar />
    <div class="main-layout">
      <aside>
        <CountriesList />
      </aside>

      <section class="details">
        <router-view />
      </section>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import CountriesList from "./components/CountriesList.vue";
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  min-height: 100vh;
}

.main-layout {
  display: flex;
}

aside {
  width: 30%;
  border-right: 1px solid #ccc;
  background-color: white;
  padding: 1rem;
  overflow-y: auto;
  height: calc(100vh - 56px); /* ajustamos a altura menos el nav */
}

.details {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
