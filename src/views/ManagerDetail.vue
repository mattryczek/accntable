<script setup>
// VUE imports
// https://stackoverflow.com/a/74286664
import { useRoute } from 'vue-router'
import { ref } from 'vue'

// Component Imports
import Navbar from '@comp/Navbar.vue'
import ReviewCard from '@comp/ManagerReviewCard.vue'
import ScoreCard from '@comp/ManagerScoreCard.vue'
import ReviewForm from '@comp/ManagerReviewForm.vue'
import PropertyCard from '@comp/PropertyCard.vue'

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

let { data: avg_ratings, error3 } = await supabase
  .from('pm_overall_rating')
  .select()
  .eq('prop_manager_id', route.params.id)

let { data: properties, error4 } = await supabase
  .from('property_char_view')
  .select()
  .eq('prop_manager_id', route.params.id)

async function post_data(data) {
  data['prop_manager_id'] = route.params.id
  data['created_at'] = new Date().toISOString()

  const { error } = await supabase.from('pm_ratings').insert(data)

  reviews.value.unshift({
    author: data.author,
    notes: data.notes,
    created_at: data.created_at,
    thumbs_up: 0,
    thumbs_down: 0
  })
}
</script>

<template>
  <Navbar />
  <div class="container mb-4">
    <div class="d-flex flex-wrap">
      <div class="flex-grow-1 mb-3 col-6" style="max-width: 50%">
        <h1>{{ current.business_name }}</h1>
        <h5 class="text-muted fw-lighter">{{ current.address_ln1 }}</h5>
        <h5 class="text-muted fw-lighter">
          {{ current.city + ', ' + current.state + ' ' + current.zip }}
        </h5>
      </div>

      <div class="flex-grow-1" style="min-width: 50%">
        <ScoreCard :key="current.prop_manager_id" :data="avg_ratings[0]" />
      </div>
    </div>
  </div>

  <div class="container mb-4">
    <ReviewForm @response="(r) => post_data(r)" />
  </div>

  <div class="accordion container mb-4" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <h5 style="margin-bottom: 0px">Properties from this Manager</h5>
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body d-flex flex-wrap ">
          <PropertyCard
            class="mb-2 me-2"
            style="max-width: 17rem"
            v-for="property in properties"
            :key="property.property_id"
            :data="property"
          />
        </div>
      </div>
    </div>
  </div>

  <div id="reviews" class="container">
    <h3 class="border-bottom mb-3">Reviews for this Property Manager</h3>
    <ReviewCard v-for="review in reviews" :key="review.pm_rating_id" :data="review" />
  </div>
</template>
