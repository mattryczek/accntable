<script setup>
import Stars from '@comp/StarDisplay.vue'

let props = defineProps({
  data: Object
})
</script>

<template>
  <RouterLink :to="`/tenant/${data.tenant_id}`" class="nav-link">
    <div class="card mb-2 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ data.first_name + ' ' + data.last_name }}</h5>
        <Stars :star_count="data.overall_rating" />
        <pre class="card-text mt-2" style="margin-bottom: 0rem"
          >{{
            data.previous_address_ln1 +
            ' ' +
            data.previous_address_ln2 +
            '\n' +
            data.previous_city +
            (data.previous_address_ln1 === '' ? 'No Previous Address' : ', ') +
            data.previous_state +
            ' ' +
            data.previous_zip
          }}
          </pre
        >
      </div>
    </div>
  </RouterLink>
</template>
