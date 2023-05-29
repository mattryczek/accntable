<script setup>
import { ref, computed } from 'vue'

import Navbar from '@comp/Navbar.vue'
import ManagerCard from '@comp/ManagerCard.vue'

import { supabase } from '@/supabase'
import { main } from '@popperjs/core';

let { data: managers, error } = await supabase
  .from('pm_average_rating')
  .select()
  .limit(5)
  .order('prop_manager_id', { ascending: true })

const empty = ref(false)

const responsiveness = ref(0)
const friendliness = ref(0)
const management = ref(0)
const maintenance = ref(0)
const rent = ref(0)
const communication = ref(0)

const filtered = computed(() => {

  // Empty array of matching properties to start
  let result;

  result = managers.filter(e => e.timeliness_responsiveness >= responsiveness.value)

  result = result.filter(e => e.friendliness >= friendliness.value)

  result = result.filter(e => e.management_abilities >= management.value)

  result = result.filter(e => e.maintenance >= maintenance.value)

  result = result.filter(e => e.reasonable_rate >= rent.value)

  result = result.filter(e => e.communication >= communication.value)

  // Render results found/not found div
  result.length === 0 ? empty.value = true : empty.value = false

  return result
})

</script>

<template>
  <Navbar />
  <div class="managers container mt-4">
    <div class="row">
      <div class="col-3">
        <h1 class="display-6 fs-1">Filters</h1>
        <div class="overflow-scroll px-1" id="filters">

          <!-- Responsiveness -->
          <div class="d-flex">
            <div class="me-auto">
              Responsiveness
            </div>

            <input type="number" v-model="responsiveness" class="form-control form-control-sm flex-fill ms-4">

          </div>
          <hr>
          <!-- End Responsiveness -->

          <!-- Friendliness -->
          <div class="d-flex">
            <div class="me-auto">
              Friendliness
            </div>

            <input type="number" v-model="friendliness" class="col-6 form-control form-control-sm flex-fill ms-4">

          </div>
          <hr>
          <!-- End Friendliness -->

          <!-- Management -->
          <div class="d-flex">
            <div class="me-auto">
              Management
            </div>

            <input type="number" v-model="management" class="form-control form-control-sm flex-fill ms-4">

          </div>
          <hr>
          <!-- End Management -->

          <!-- Maintenance -->
          <div class="d-flex">
            <div class="me-auto">
              Maintenance
            </div>

            <input type="number" v-model="maintenance" class="form-control form-control-sm flex-fill ms-4">

          </div>
          <hr>
          <!-- End Maintenance -->

          <!-- Rent -->
          <div class="d-flex">
            <div class="me-auto">
              Rent
            </div>

            <input type="number" v-model="rent" class="form-control form-control-sm flex-fill ms-4">

          </div>
          <hr>
          <!-- End Rent -->

          <!-- Communication -->
          <div class="d-flex">
            <div class="me-auto">
              Communication
            </div>

            <input type="number" v-model="communication" class="form-control form-control-sm flex-fill ms-4">

          </div>
          <hr>
          <!-- End Communication -->

        </div>
      </div>
      <div class="col-9">
        <div v-if="empty">
          <h1 class="display-6 fs-1">No results found!</h1>
          <p>Try relaxing your filters to show more property managers.</p>
        </div>
        <ManagerCard v-for="manager in filtered" :key="manager.prop_manager_id" :data="manager" />
      </div>
    </div>
  </div>
</template>
