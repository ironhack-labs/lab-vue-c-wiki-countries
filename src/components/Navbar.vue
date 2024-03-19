<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    title: String
});


</script>

<template>
    <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
            <a class="navbar-brand" href="/">{{ title }} WikiCountries</a>
        </div>
    </nav>
</template>

<style></style>