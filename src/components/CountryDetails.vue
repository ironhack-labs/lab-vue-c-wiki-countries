<script setup>
import COUNTIES from '/public/countries.json';
import  { useRoute } from 'vue-router';
import { ref, computed, watch} from 'vue'
const route = useRoute();
const currentCode = ref(route.params.alpha3Code);
watch(() => route.params.alpha3Code, (newCode) => {
  currentCode.value = newCode;
})



const currentCountrie = computed(() => COUNTIES.find((el) => el.alpha3Code === currentCode.value));

const borderCounties = computed(() => COUNTIES.filter((el) => currentCountrie.value.borders.includes(el.alpha3Code)))




</script>

<template>
  <section>
    <div class="col-7" v-if="currentCountrie">
      <img
        :src="`https://flagcdn.com/${currentCountrie.alpha2Code?.toLowerCase()}.svg`"
        alt="country flag"
        style="width: 300px"
      />
      <h1>{{currentCountrie?.name.common}}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style="width: 30%">Capital</td>
            <td class="td">{{currentCountrie?.capital?.join(', ')}}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td class="td">{{currentCountrie.area}} km <sup>2</sup></td>
          </tr>
          <tr v-if="borderCounties.length > 0">
            <td>Borders</td>
            <td class="td">
              <ul >
                <li v-for="countrie in borderCounties">
                  <RouterLink
                class="list-group-item list-group-item-action"
                :to="{
                  name: 'country-details',
                  params: { alpha3Code: countrie.alpha3Code },
                }"
              >

                <a>{{ countrie.name.common }}</a>
              </RouterLink>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
padding: 0;
color: blue;
text-decoration: underline;
}
.td {
  text-align: center;
}
img {
  width: 300px;
  height: auto;
}
</style>
