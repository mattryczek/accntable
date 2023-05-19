<script setup>
// https://stackoverflow.com/a/74286664
import { useRoute } from 'vue-router'

import { supabase } from '@/supabase'

import Navbar from '@comp/Navbar.vue'
import ReviewCard from '@comp/PropertyReviewCard.vue'
import Footer from '@comp/Footer.vue'

const route = useRoute()

let { data: property_info, error } = await supabase
  .from('property')
  .select()
  .eq('property_id', route.params.id)

property_info = property_info[0]

console.log(property_info)

let { data: property_char, error2 } = await supabase
  .from('property_characteristics')
  .select()
  .eq('property_id', route.params.id)

</script>

<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ property_info.address_ln1 }}</h1>
        <h5 class="text-muted fw-lighter">{{  }}</h5>
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
