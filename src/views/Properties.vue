<script setup>
import { ref, computed } from 'vue'

import Navbar from '@/components/Navbar.vue'
import PropertyCard from '@comp/PropertyCard.vue'

import { supabase } from '@/supabase'

let { data: properties, error } = await supabase
  .from('property_char_view')
  .select()
  .order('created_at', { ascending: false })

const empty = ref(false)

// Filter Refs
const beds_min = ref(1)
const beds_max = ref(5)

const baths_min = ref(1)
const baths_max = ref(5)

const parking_min = ref(1)
const parking_max = ref(5)

const rent_min = ref(0)
const rent_max = ref(4500)

const laundry = ref('In Unit')
const lease = ref('Annual')

const transit_dist = ref(15)
const poi_dist = ref(15)

const violations = ref(5)
const bedbugs = ref(5)

const gym = ref(true)
const pets = ref(false)

const filtered_ref = computed(() => {

  // Empty array of matching properties to start
  let result;

  result = properties.filter((p) => p.bedrooms >= beds_min.value && p.bedrooms <= beds_max.value)
  result = result.filter((p) => p.baths >= baths_min.value && p.baths <= baths_max.value)
  result = result.filter((p) => p.baths >= baths_min.value && p.baths <= baths_max.value)

  // TODO -- see how we want to redo parking spots

  // Rent
  result = result.filter((p) => p.rent >= rent_min.value && p.rent <= rent_max.value)

  // Laundry
  result = result.filter((p) => p.laundry === laundry.value)

  // Lease
  result = result.filter((p) => p.lease_time_frame === lease.value)

  // Distances
  result = result.filter((p) => p.transit_walking <= transit_dist.value)
  result = result.filter((p) => p.poi_walking <= poi_dist.value)

  // TODO violations
  // result = result.filter((p) => p.transit_walking <= violations.value)

  //TODO bedbugs
  // result = result.filter((p) => p.transit_walking <= violations.value)

  // Toggles
  result = result.filter((p) => p.gym === gym.value)
  result = result.filter((p) => p.pets === pets.value)

  // Render results found/not found blurb
  result.length === 0 ? empty.value = true : empty.value = false

  return result
})

</script>

<template>
  <Navbar />
  <div class="properties container mt-3">

    <div class="row">
      <div class="col-3">
        <h1 class="display-6 fs-1">Filters</h1>
        <div class="overflow-scroll px-1" id="filters">
          <hr>

          <!-- Bed -->
          <div class="container">
            <div class="row">Beds</div>

            <div class="row d-flex flex-nowrap mt-2">
              <select v-model="beds_min" class="form-select form-select-sm flex-fill me-2"
                aria-label=".form-select-sm example">
                <option>min</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <select v-model="beds_max" class="form-select form-select-sm flex-fill ms-2"
                aria-label=".form-select-sm example">
                <option>max</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

            </div>

          </div>
          <hr>
          <!-- End Bed -->

          <!-- Bath -->
          <div class="container">
            <div class="row">Baths</div>

            <div class="row d-flex flex-nowrap mt-2">
              <select v-model="baths_min" class="form-select form-select-sm flex-fill me-2"
                aria-label=".form-select-sm example">
                <option>min</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <select v-model="baths_max" class="form-select form-select-sm flex-fill ms-2"
                aria-label=".form-select-sm example">
                <option>max</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

            </div>

          </div>
          <hr>
          <!-- End Bath -->

          <!-- Parking -->
          <div class="container">
            <div class="row">Parking Spots</div>

            <div class="row d-flex flex-nowrap mt-2">
              <select v-model="parking_min" class="form-select form-select-sm flex-fill me-2"
                aria-label=".form-select-sm example">
                <option>min</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <select v-model="parking_max" class="form-select form-select-sm flex-fill ms-2"
                aria-label=".form-select-sm example">
                <option>max</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

            </div>

          </div>
          <hr>
          <!-- End Parking -->

          <!-- Rent -->
          <div class="container">
            <div class="row">Rent</div>

            <div class="row d-flex flex-nowrap mt-2">
              <input v-model.lazy="rent_min" class="flex-fill me-2 form-control form-control-sm" type="text"
                placeholder="min">

              <input v-model.lazy="rent_max" class="flex-fill ms-2 form-control form-control-sm" type="text"
                placeholder="max">
            </div>

          </div>
          <hr>
          <!-- End Rent -->

          <!-- Laundry -->
          <div class="d-flex">
            <div class="me-auto">
              Laundry
            </div>

            <select v-model="laundry" class="form-select form-select-sm flex-fill ms-4"
              aria-label=".form-select-sm example">
              <option></option>
              <option value="In Unit">In Unit</option>
              <option value="On Property Premise">On Site</option>
            </select>
          </div>
          <hr>
          <!-- End Laundry -->

          <!-- Lease Type -->
          <div class="d-flex">
            <div class="me-auto">
              Lease Type
            </div>

            <select v-model="lease" class="form-select form-select-sm flex-fill ms-4"
              aria-label=".form-select-sm example">
              <option></option>
              <option value="Annual">Annual</option>
              <option value="Month-to-Month">Month-to-Month</option>
            </select>
          </div>
          <hr>
          <!-- End Lease -->

          <!-- Transit -->
          <div class="d-flex">
            <div class="col-8">
              Transit Distance
              <span title="Distance to train or public transportation in miles">❓</span>
            </div>
            <input v-model.lazy="transit_dist" class="form-control form-control-sm" type="text" placeholder="mi.">
          </div>
          <hr>
          <!-- End Transit -->

          <!-- POI -->
          <div class="d-flex">
            <div class="col-8">
              POI Distance
              <span title="Distance to points of interest such as grocers and malls.">❓</span>
            </div>
            <input v-model.lazy="poi_dist" class="form-control form-control-sm" type="text" placeholder="mi.">
          </div>
          <hr>
          <!-- End POI -->

          <!-- Violations -->
          <div class="d-flex">
            <div class="col-8">
              Violations
            </div>
            <input v-model.lazy="violations" class="form-control form-control-sm" type="text" placeholder="max">
          </div>
          <hr>
          <!-- End Violations -->

          <!-- Bedbugs -->
          <div class="d-flex">
            <div class="col-8">
              Bedbug Reports
            </div>
            <input v-model.lazy="bedbugs" class="form-control form-control-sm" type="text" placeholder="max">
          </div>
          <hr>
          <!-- End Bedbugs -->

          <!-- Gym -->
          <div class="d-flex">
            <div class="me-auto">
              Gym in Building
            </div>
            <div class="form-check form-switch me-2">
              <input v-model="gym" class="form-check-input" type="checkbox" role="switch" id="gym_switch">
            </div>
          </div>
          <hr>
          <!-- End Gym -->

          <!-- Pets -->
          <div class="d-flex">
            <div class="me-auto">
              Pets Allowed
            </div>
            <div class="form-check form-switch me-2">
              <input v-model="pets" class="form-check-input" type="checkbox" role="switch" id="gym_switch">
            </div>
          </div>
          <hr>
          <!-- End Pets -->

        </div>
      </div>

      <div class="col-9">
        <div class="row row-cols-1">
          <!-- row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 -->
          <div v-if="empty">
            <h1 class="display-6 fs-1">No results found!</h1>
            <p>Try adjusting your filters to show properties of interest.</p>
          </div>
          <PropertyCard class="mb-2" v-for="property in filtered_ref" :key="property.property_id" :data="property" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
