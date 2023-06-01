<script setup>
import { ref, computed } from 'vue'

import Navbar from '@/components/Navbar.vue'
import PropertyCard from '@comp/PropertyCard.vue'

import InlineCheck from '@comp/InlineCheck.vue'
import InlineNumber from '@comp/InlineNumber.vue'
import InlineSelect from '@comp/InlineSelect.vue'

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
  let result

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

  // Violations
  result = result.filter((p) => p.violations <= violations.value)

  // Bedbugs
  result = result.filter((p) => p.bed_bugs <= bedbugs.value)

  // Toggles
  result = result.filter((p) => p.gym === gym.value)
  result = result.filter((p) => p.pets === pets.value)

  // Render results found/not found div
  result.length === 0 ? (empty.value = true) : (empty.value = false)

  return result
})
</script>

<template>
  <Navbar />
  <div class="properties container mt-3">
    <div class="d-flex flex-wrap">

      <div class="accordion mb-3 me-3" id="1" style="max-width: 17rem;">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              <h4 class="me-4">Filters</h4>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#1">
            <div class="accordion-body">

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
              <hr />
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
              <hr />
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
              <hr />
              <!-- End Parking -->

              <!-- Rent -->
              <div class="container">
                <div class="row">Rent</div>

                <div class="row d-flex flex-nowrap mt-2">
                  <input v-model.lazy="rent_min" class="flex-fill me-2 form-control form-control-sm" type="text"
                    placeholder="min" />

                  <input v-model.lazy="rent_max" class="flex-fill ms-2 form-control form-control-sm" type="text"
                    placeholder="max" />
                </div>
              </div>
              <hr />
              <!-- End Rent -->

              <InlineSelect v-model="laundry" :label="`Laundry`" :options="['In Unit', 'Onsite']" />
              <InlineSelect v-model="lease" :label="`Lease Term`" :options="['Annual', 'Month to Month']" />

              <InlineNumber v-model.lazy="transit_dist" :label="`Transit Distance`" />
              <InlineNumber v-model.lazy="poi_dist" :label="`POI Distance`" />

              <InlineNumber v-model.lazy="violations" :label="`Violations`" />
              <InlineNumber v-model.lazy="bedbugs" :label="`Bedbug Reports`" />

              <InlineCheck v-model="gym" :label="`Gym in Building`" />
              <InlineCheck v-model="pets" :label="`Pets Allowed`" />

            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-wrap" style="max-height: 0rem;">
        <div v-if="empty">
          <h1 class="display-6 fs-1">No results found!</h1>
          <p>Try adjusting your filters to show properties of interest.</p>
        </div>
        <PropertyCard class="mb-2 me-2" v-for="property in filtered_ref" :key="property.property_id" :data="property" />
      </div>
    </div>
  </div>
</template>

<style></style>
