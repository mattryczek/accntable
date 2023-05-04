<script setup>
// https://stackoverflow.com/a/74286664
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import Navbar from '@comp/Navbar.vue'
import ReviewCard from '@comp/ReviewCard.vue'
import ScoreCard from '@comp/ScoreCard.vue'
import ReviewForm from '@comp/ManagerReviewform.vue'
import Footer from '@comp/Footer.vue'

import manData from '@json/managers.json'
import reviewData from '@json/reviews.json'

const route = useRoute()
const managers = manData.managers
const reviews = reviewData.reviews

let current = managers.find((el) => el.id === route.params.id)
</script>

<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ current.name }}</h1>
        <h5 class="text-muted fw-lighter">{{ current.address }}</h5>
        <h5 class="text-muted fw-lighter">
          {{ current.city + ', ' + current.state + ' ' + current.zip }}
        </h5>
      </div>

      <div class="col">
        <ScoreCard :key="current.id" :data="current.categories" />
      </div>
    </div>
  </div>

  <div class="container">
    <ReviewForm />
  </div>

  <div id="reviews" class="container mt-4">
    <h3 class="border-bottom mb-3">Reviews for this Property Manager</h3>
    <ReviewCard v-for="review in reviews" :key="review.id" :data="review" />
  </div>
  <Footer />
</template>

<style></style>
