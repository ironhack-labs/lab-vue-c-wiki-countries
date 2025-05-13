<script setup>
import COUNTRIES from "../../public/countries.json";
import { ref } from "vue";

const countries = ref(COUNTRIES);

</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-5" style="max-height: 90vh; overflow: scroll">
          <ul class="list-group">
            <li v-for="country in countries" :key="country.alpha3Code">
              <RouterLink
                class="list-group-item list-group-item-action"
                :to="{
                  name: 'country-details',
                  params: { alpha3Code: country.alpha3Code },
                }"
              >
                <img
                  :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
                />
                <p>{{ country.name.common }}</p>
              </RouterLink>
            </li>
          </ul>
        </div>
        <router-view />
      </div>
    </div>
  </section>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
ul {
  list-style: none;
}
</style>
