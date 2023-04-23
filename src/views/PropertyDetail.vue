<script setup>
// https://stackoverflow.com/a/74286664
import { useRoute } from "vue-router"
const route = useRoute()

import Navbar from '@comp/Navbar.vue'
import Carousel from '@comp/Carousel.vue'

import propData from '@/assets/json/properties.json'
const properties = propData.properties;

let current = properties.find(el => el.propertyID === route.params.id);
</script>

<template>
    <Navbar />
    <div class="container">
        <div class="card">
            <div class="card-body">
                {{ current.address1 }}
            </div>
        </div>
    </div>
</template>

<style>
#test {
    max-width: 50%;
}
</style>