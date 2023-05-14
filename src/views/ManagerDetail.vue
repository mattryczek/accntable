<script setup>
// VUE imports
// https://stackoverflow.com/a/74286664
import { useRoute } from 'vue-router'
import { ref } from 'vue'

// Component Imports
import Navbar from '@comp/Navbar.vue'
import ReviewCard from '@comp/ManagerReviewCard.vue'
import ScoreCard from '@comp/ManagerScoreCard.vue'
import ReviewForm from '@comp/ManagerReviewform.vue'
import Footer from '@comp/Footer.vue'

// External imports
import { supabase } from '@/supabase'

const route = useRoute()

let { data: current, error } = await supabase
  .from('property_manager')
  .select()
  .eq('prop_manager_id', route.params.id)

current = current[0]


let { data: reviews_raw, error2 } = await supabase
  .from('pm_ratings')
  .select('pm_rating_id, notes, author, created_at, thumbs_up, thumbs_down')
  .eq('prop_manager_id', route.params.id)
  .order('created_at', { ascending: false })

const reviews = ref(reviews_raw)
console.log(reviews_raw)

let { data: avg_ratings, error3 } = await supabase
  .from('pm_average_rating')
  .select()
  .eq('business_name', 'Wildcat LLC') //route.params.id)

async function post_data(data) {
  data["prop_manager_id"] = route.params.id
  data["created_at"] = new Date().toISOString()

  const { error } = await supabase
    .from('pm_ratings')
    .insert(data)

  reviews.value.unshift({
    author: data.author,
    notes: data.notes,
    created_at: data.created_at
  })
}
</script>

<template>
  <Navbar />
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{ current.business_name }}</h1>
        <h5 class="text-muted fw-lighter">{{ current.address_ln1 }}</h5>
        <h5 class="text-muted fw-lighter">
          {{ current.city + ', ' + current.state + ' ' + current.zip }}
        </h5>
      </div>

      <div class="col">
        <ScoreCard :key="current.prop_manager_id" :data="avg_ratings[0]" />
      </div>
    </div>
  </div>

  <div class="container">
    <ReviewForm @response="r => post_data(r)" />
  </div>

  <div id="reviews" class="container mt-4">
    <h3 class="border-bottom mb-3">Reviews for this Property Manager</h3>
    <ReviewCard v-for="review in reviews" :key="review.pm_rating_id" :data="review" />
  </div>
  <Footer />
</template>

<style></style>
