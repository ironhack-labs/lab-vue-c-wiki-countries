<template>
  <div class="col-7" v-if="country">
    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
      style="width: 300px"
    />
    <h1>{{ country.name.common }}</h1>
    <table class="table">
      <tbody>
        <tr>
          <td>Capital</td>
          <td>{{ country.capital[0] }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km²</td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <li v-for="border in country.borders" :key="border">
                <router-link :to="`/${border}`">{{ border }}</router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps(['country']);
</script>
