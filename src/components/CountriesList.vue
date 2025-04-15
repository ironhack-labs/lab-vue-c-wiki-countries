<script setup>
import countriesData from '../assets/countries.json'
import {reactive, onMounted} from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const countries = reactive(countriesData)
// onMounted(
//     async()=>{
//         try {
        
//             const res  = await fetch('../assets/countries.json')
//             const data = await res.json()
//             countries.push(...data)
//             console.log('Countries', countries)
            
//         } catch (error) {
//             console.log('Error', error)
//         }
//     }
// )

</script>

<template>

    <div class="col-5" style="max-height: 90vh; overflow: scroll">
        <div class="list-group">
            <RouterLink class="list-group-item list-group-item-action" v-for="country in countries" :key="country.alpha3Code" :to="country.alpha3Code">
                <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
                <p>{{ country.name.common }}</p>
            </RouterLink>

        </div>
    </div>
    <RouterView/>


</template>



<style scoped>

</style>