<script setup>
import { ref, computed } from 'vue'

import Navbar from '@comp/Navbar.vue'
import TenantCard from '@comp/TenantCard.vue'
import Stars from '@comp/StarRating.vue'
import Input from '@comp/InlineNumber.vue'

import { supabase } from '@/supabase'

let { data: tenants, error } = await supabase
  .from('tenant_overall_rating')
  .select()
  .limit(10)
  .order('tenant_id', { ascending: true })

const empty = ref(false)

const responsiveness = ref('1')
const friendliness = ref('1')
const communication = ref('1')
const cleanliness = ref('1')
const condition = ref('1')
const report_count = ref('10')

const filtered = computed(() => {
  // Empty array of matching PMs to start
  let result

  result = tenants.filter((e) => e.timeliness_responsiveness >= responsiveness.value)

  result = result.filter((e) => e.friendliness >= friendliness.value)

  result = result.filter((e) => e.communication >= communication.value)

  result = result.filter((e) => e.cleanliness >= cleanliness.value)

  result = result.filter((e) => e.property_condition >= condition.value)

  result = result.filter((e) => e.reportcount <= report_count.value)

  // Render results found/not found div
  result.length === 0 ? (empty.value = true) : (empty.value = false)

  return result
})
</script>

<template>
  <Navbar />
  <div class="tenants container mt-4">
    <div class="d-flex flex-wrap">
      <div class="accordion mb-3 me-3" id="1">
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
              <h4 class="me-4">Filters</h4>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#1">
            <div class="accordion-body">
              <Stars v-model="responsiveness" :label="`Responsiveness`" />
              <Stars v-model="friendliness" :label="`Friendliness`" />
              <Stars v-model="communication" :label="`Communication`" />
              <Stars v-model="cleanliness" :label="`Cleanliness`" />
              <Stars v-model="condition" :label="`Return Condition`" />
              <Input v-model="report_count" :label="`Report Count`" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div v-if="empty">
          <h1 class="display-6 fs-1">No results found!</h1>
          <p>Try relaxing your filters to show more tenants.</p>
        </div>

        <div class="d-flex flex-wrap flex-grow-1">
          <TenantCard
            class="me-2 mb-2"
            v-for="tenant in filtered"
            :key="tenant.tenant_id"
            :data="tenant"
          />
        </div>
      </div>
    </div>
  </div>
</template>
