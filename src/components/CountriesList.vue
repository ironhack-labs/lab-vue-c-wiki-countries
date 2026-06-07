<script setup>
import { useRoute, RouterView } from "vue-router";
import countries from "/src/countries.json";

</script>

<template>
<!-- Countries List (Bootstrap column) -->
<div class="col-5" style="max-height: 90vh; overflow: scroll">
    <div class="list-group">
        <RouterLink 
            class="list-group-item list-group-item-action" :to="`/${country.alpha3Code}`" 
            v-for="country in countries" :key="country.alpha3Code"
        >
            <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
            <p>{{ country.name.common }}</p>
        </RouterLink>

<!--         <RouterLink class="list-group-item list-group-item-action" to="/ABW">
            <img src="https://flagpedia.net/data/flags/icon/72x54/aw.png" />
            <p>Aruba</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/AFG">
            <img src="https://flagpedia.net/data/flags/icon/72x54/af.png" />
            <p>Afghanistan</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/AGO">
            <img src="https://flagpedia.net/data/flags/icon/72x54/ao.png" />
            <p>Angola</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/AIA">
            <img src="https://flagpedia.net/data/flags/icon/72x54/ai.png" />
            <p>Anguilla</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/ALA">
            <img src="https://flagpedia.net/data/flags/icon/72x54/ax.png" />
            <p>Åland Islands</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/ALB">
            <img src="https://flagpedia.net/data/flags/icon/72x54/al.png" />
            <p>Albania</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/AND">
            <img src="https://flagpedia.net/data/flags/icon/72x54/ad.png" />
            <p>Andorra</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/ARE">
            <img src="https://flagpedia.net/data/flags/icon/72x54/ae.png" />
            <p>United Arab Emirates</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/ARG">
            <img src="https://flagpedia.net/data/flags/icon/72x54/ar.png" />
            <p>Argentina</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/ARM">
            <img src="https://flagpedia.net/data/flags/icon/72x54/am.png" />
            <p>Armenia</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/ASM">
            <img src="https://flagpedia.net/data/flags/icon/72x54/as.png" />
            <p>American Samoa</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/ATA">
            <img src="https://flagpedia.net/data/flags/icon/72x54/aq.png" />
            <p>Antarctica</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/FLK">
            <img src="https://flagpedia.net/data/flags/icon/72x54/fk.png" />
            <p>Falkland Islands</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action active" to="/FRA">
            <img src="https://flagpedia.net/data/flags/icon/72x54/fr.png" />
            <p>France</p>
        </RouterLink>
        <RouterLink class="list-group-item list-group-item-action" to="/ZWE">
            <img src="https://flagpedia.net/data/flags/icon/72x54/zw.png" />
            <p>Zimbabwe</p>
        </RouterLink> -->
    </div>
</div>
<RouterView />
</template>