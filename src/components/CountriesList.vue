<script>
import { RouterLink, RouterView } from 'vue-router';


export default {
    data(){
        return{ 
            countries: []
        }
    },
    mounted() {
        fetch('/public/countries.json')
            .then(res=> res.json())
            .then(data=> this.countries = data)
            .catch(err=> console.log(err.message))
    }
    
}

</script>

<template>

    <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div v-for="country in countries" :key="country.alpha3Code" class="list-group">
              <router-link :to="`/country/${country.alpha3Code}`" class="list-group-item list-group-item-action">
                <img :src= "`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
                <p>{{ country.name.common }}</p>
              </router-link>
        </div>
    </div>
    <div class="col-7">
        <RouterView></RouterView>
    </div>
    
</template>