<template>
    <div class="col-7">
        <img 
            :src="`https://flagpedia.net/data/flags/w702/${alpha2Code.toLowerCase()}.png`"
            alt="country flag" 
            style="width: 300px"
        />
        <h1>{{name}}</h1>
        <table class="table">
            <thead></thead>
            <tbody>
                <tr>
                    <td style="width: 30%">Capital</td>
                    <td>{{capital}}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>
                        {{area}} km <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                        <p v-if="borders.length === 0"> 
                            This Country does not have country borders. Maybe an Island? 
                        </p>
                        <ul v-else>
                            <li v-for="(border, index) in borders" :key="index">
                                <router-link :to="`/list/${border}`">{{border}}</router-link>
                            </li>

                        </ul>  
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "CountryDetails",
    data() {
        return {
            name: "",
            capital: "",
            area: "",
            alpha2Code: "",
            alpha3Code: "",
            borders: [],
            countryInfo: {},
        }
    },
    methods: {
      async getCountryByAlphaCode() {
        this.alpha3Code = this.$route.params.alpha3Code;
        const response = await fetch(
          `https://ih-countries-api.herokuapp.com/countries/${this.alpha3Code}`
        );
        
        const finalResponse = await response.json();
        this.name = finalResponse.name.common || "";
        this.capital = finalResponse.capital[0];
        this.area = finalResponse.area;
        this.borders = finalResponse.borders;
        this.alpha2Code = finalResponse.alpha2Code;
        this.countryInfo = finalResponse;
      },
    },
    mounted() {
      this.getCountryByAlphaCode();
    },
    computed: {
      countryCode() {
        return this.$route.params.alpha3Code;
      },
    },
    watch: {
      countryCode(newCountryCode) {
        this.getCountryByAlphaCode();
      },
    },
}
</script>
