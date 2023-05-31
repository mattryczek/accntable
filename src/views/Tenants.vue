<script setup>
import { ref, computed } from 'vue'

import Navbar from '@comp/Navbar.vue'
import TenantCard from '@comp/TenantCard.vue'
import Stars from '@comp/StarRating.vue'
import Input from '@comp/InlineInputV.vue'

import { supabase } from '@/supabase'

let { data: tenants, error } = await supabase
  .from('ten_average_rating')
  .select()
  .limit(5)
  .order('tenant_id', { ascending: true })

const empty = ref(false)

const responsiveness = ref("1")
const friendliness = ref("1")
const communication = ref("1")
const cleanliness = ref("1")
const condition = ref("1")
const report_count = ref("10")

const filtered = computed(() => {

  // Empty array of matching PMs to start
  let result;

  result = tenants.filter(e => e.timeliness_responsiveness >= responsiveness.value)

  result = result.filter(e => e.friendliness >= friendliness.value)

  result = result.filter(e => e.communication >= communication.value)

  result = result.filter(e => e.cleanliness >= cleanliness.value)

  result = result.filter(e => e.property_condition >= condition.value)

  result = result.filter(e => e.reportcount <= report_count.value)

  // Render results found/not found div
  result.length === 0 ? empty.value = true : empty.value = false

  return result
})

</script>

<template>
  <Navbar />
  <div class="tenants container mt-4">
    <div class="row">
      <div class="col-3">
        <h1 class="display-6 fs-1">Filters</h1>
        <div class="overflow-scroll px-1" id="filters">

          <Stars v-model="responsiveness" :label="`Responsiveness`" />
          <Stars v-model="friendliness"   :label="`Friendliness`" />
          <Stars v-model="communication"  :label="`Communication`" />
          <Stars v-model="cleanliness"    :label="`Cleanliness`" />
          <Stars v-model="condition"      :label="`Return Condition`" />
          <Input v-model="report_count"   :label="`Report Count`" />

        </div>
      </div>
      <div class="col-9">
        <div v-if="empty">
          <h1 class="display-6 fs-1">No results found!</h1>
          <p>Try relaxing your filters to show more tenants.</p>
        </div>
        <TenantCard v-for="tenant in filtered" :key="tenant.tenant_id" :data="tenant" />
      </div>
    </div>
  </div>
</template>
