<template>
  <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
          <router-link
            v-for="country in countries"
            :key="country.alpha3Code"
            class="list-group-item list-group-item-action"
            :to="`/list/${country.alpha3Code}`"
          >
            {{ country.name.common }}
          </router-link>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
const { countries } = defineProps(["countries"]);
</script>
