<script setup>
// https://stackoverflow.com/a/74286664
import { useRoute } from 'vue-router'

import { supabase } from '@/supabase'

import Navbar from '@comp/Navbar.vue'
import ReviewCard from '@comp/ManagerReviewCard.vue'
import Card from '@comp/SimpleCard.vue'

const route = useRoute()

let { data: property_info, error } = await supabase
  .from('property_char_view')
  .select()
  .eq('property_id', route.params.id)

property_info = property_info[0]

let { data: manager, error2 } = await supabase
  .from('property_manager')
  .select('business_name')
  .eq('prop_manager_id', property_info.prop_manager_id)

manager = manager[0]

let { data: reviews, error3 } = await supabase
  .from('pm_ratings')
  .select('pm_rating_id, notes, author, created_at')
  .eq('prop_manager_id', property_info.prop_manager_id)

const rent = property_info.rent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

</script>

<template>
  <Navbar />

  <div class="container">
    <div class="d-flex flex-wrap">

      <div class="flex-grow-1">
        <h1>{{ property_info.address_ln1 }}</h1>
        <h4 class="fw-light">{{ property_info.city + ', ' + property_info.state + ' ' + property_info.zip }}</h4>
        <h5 class="fw-light">
          Lease Term: <span class="badge rounded-pill text-bg-secondary">{{ property_info.lease_time_frame }}</span>
        </h5>
        <h5 class="text-muted fw-lighter">Managed by {{ manager.business_name }}</h5>
      </div>

      <div>
        <img :src="`${property_info.image_url}`" class="rounded img-fluid" />
      </div>
    </div>


    <div class="mt-4 d-flex flex-wrap">
      <div class="d-flex flex-wrap flex-grow-1">
        <h3 style="width: 100%">Property Details</h3>
        <Card :title="`Rent`" :content="`$${rent}`" />
        <Card :title="`Bedrooms`" :content="property_info.bedrooms.toString()" />
        <Card :title="`Bathrooms`" :content="property_info.baths.toString()" />
        <Card :title="`Transit`" :content="`${property_info.transit_walking} mi.`" />
        <Card :title="`POI`" :content="`${property_info.poi_walking} mi.`" />

      </div>

      <div class="d-flex flex-wrap mt-4 flex-grow-1">
        <h3 style="width: 100%">Amenities</h3>
        <Card v-if="property_info.parking_spot" :title="`Parking`" :content="`🅿️`" />
        <Card v-if="property_info.gym" :title="`Gym`" :content="`👟`" />
        <Card v-if="property_info.pets" :title="`Pet Friendly`" :content="`🐈`" />
        <Card :title="property_info.laundry" :content="`🧺`" />


      </div>
    </div>

  </div>

  <div class="container mt-4">
    <div class="d-flex flex-wrap">
      <h3 class="fw-light">Reviews for &nbsp;</h3>
      <h3 class="mb-3">{{ manager.business_name }}</h3>

    </div>
    <ReviewCard v-for="review in reviews" :key="review.pm_rating_id" :data="review" />
  </div>
</template>

<style></style>
