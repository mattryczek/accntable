<script setup>
import Stars from '@comp/StarDisplay.vue'

let props = defineProps({
  data: Object
})

// let starsInt = props.data.stars
// let rating = '★'.repeat(starsInt) + '☆'.repeat(5 - starsInt)
</script>

<template>
  <RouterLink :to="`/manager/${data.prop_manager_id}`" class="nav-link">
    <div class="card my-2 shadow-sm" style="max-width: 17rem">
      <div class="card-body">
        <h5 class="card-title">{{ data.business_name }}</h5>
        <Stars :star_count="data.overall_rating" />
        <h6>{{ data.email }}</h6>
        <h6 class="fw-light">{{ data.phone }}</h6>
        <pre class="card-text">{{
          data.address_ln1 + '\n' + data.city + ', ' + data.state + ' ' + data.zip
        }}</pre>
      </div>
    </div>
  </RouterLink>
</template>
