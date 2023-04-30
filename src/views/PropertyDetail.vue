<!-- 
    JSON Index for Property Object

    address1: String,
    address2: String,
    city: String,
    manager: String,
    phone: String,
    propertyID: Number,
    state: String,
    zip: String,
    photoURL: String

-->

<script setup>
// https://stackoverflow.com/a/74286664
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import Navbar from '@comp/Navbar.vue'
import ReviewCard from '@comp/ReviewCard.vue'
import propData from '@/assets/json/properties.json'

const route = useRoute()
const properties = propData.properties

let current = properties.find((el) => el.propertyID === route.params.id)
let photoURL = ref(current.photoURL)

</script>

<template>
  <Navbar />
  <div class="container">
    <div class="row">

      <div class="col">
        <img :src=photoURL class="rounded img-fluid">
      </div>

      <div class="col">
        <h1>{{ current.address1 }}</h1>
        <h3>{{ current.address2 }}</h3>
      </div>

    </div>
  </div>

  
  <div id="reviews" class="container mt-3">
    <h2>Reviews for this Property</h2>
    <ReviewCard v-for="property in properties" :key="property.id" :data="property" />
  </div>
</template>

<style>

</style>
