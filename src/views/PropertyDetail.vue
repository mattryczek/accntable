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
import ReviewCard from '@comp/PropertyReviewCard.vue'
import Footer from '@comp/Footer.vue'

import propData from '@/assets/json/properties.json'
import reviewData from '@/assets/json/reviews.json'

const route = useRoute()
const properties = propData.properties
const reviews = reviewData.reviews

let current = properties.find((el) => el.propertyID === route.params.id)
let photoURL = ref(current.photoURL)
</script>

<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ current.address1 }}</h1>
        <h5 class="text-muted fw-lighter">{{ current.address2 }}</h5>
      </div>

      <div class="col">
        <img :src="photoURL" class="rounded img-fluid" />
      </div>
    </div>
  </div>

  <div id="reviews" class="container mt-4">
    <h3 class="border-bottom mb-3">Reviews for this Property</h3>
    <ReviewCard v-for="review in reviews" :key="review.id" :data="review" />
  </div>
  <Footer />
</template>

<style></style>
