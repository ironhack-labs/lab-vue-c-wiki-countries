<template>
  <div class="col-5" style="max-height: 90vh; overflow-y: scroll">
    <div class="list-group">
      <router-link
        v-for="country in countries"
        :key="country.alpha3Code"
        :to="`/${country.alpha3Code}`"
        class="list-group-item list-group-item-action"
      >
        <img
          :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
          class="me-2"
        />
        {{ country.name.common }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps(['countries']);
</script>
