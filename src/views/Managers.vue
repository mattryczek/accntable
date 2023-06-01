<script setup>
import { ref, computed } from 'vue'

import Navbar from '@comp/Navbar.vue'
import ManagerCard from '@comp/ManagerCard.vue'
import Stars from '@comp/StarRating.vue'

import { supabase } from '@/supabase'
import { main } from '@popperjs/core'

let { data: managers, error } = await supabase
  .from('pm_overall_rating')
  .select()
  .limit(5)
  .order('prop_manager_id', { ascending: true })

const empty = ref(false)

const responsiveness = ref('1')
const friendliness = ref('1')
const management = ref('1')
const maintenance = ref('1')
const rent = ref('1')
const communication = ref('1')

const filtered = computed(() => {
  // Empty array of matching PMs to start
  let result

  result = managers.filter((e) => e.timeliness_responsiveness >= responsiveness.value)

  result = result.filter((e) => e.friendliness >= friendliness.value)

  result = result.filter((e) => e.management_abilities >= management.value)

  result = result.filter((e) => e.maintenance >= maintenance.value)

  result = result.filter((e) => e.reasonable_rate >= rent.value)

  result = result.filter((e) => e.communication >= communication.value)

  // Render results found/not found div
  result.length === 0 ? (empty.value = true) : (empty.value = false)

  return result
})
</script>

<template>
  <Navbar />
  <div class="managers container mt-4">
    <div class="d-flex flex-wrap">

      <div class="accordion mb-3 me-3" id="1">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              <h4 class="me-4">Filters</h4>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#1">
            <div class="accordion-body">
              <Stars v-model="responsiveness" :label="`Responsiveness`" />
              <Stars v-model="friendliness" :label="`Friendliness`" />
              <Stars v-model="management" :label="`Management`" />
              <Stars v-model="maintenance" :label="`Maintenance`" />
              <Stars v-model="rent" :label="`Rent Fairness`" />
              <Stars v-model="communication" :label="`Communication`" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-9">
        <div v-if="empty">
          <h1 class="display-6 fs-1">No results found!</h1>
          <p>Try relaxing your filters to show more property managers.</p>
        </div>
        <div class="d-flex flex-wrap">
          <ManagerCard class="me-2 mb-2" v-for="manager in filtered" :key="manager.prop_manager_id" :data="manager" />
        </div>
      </div>

    </div>
  </div>
</template>
