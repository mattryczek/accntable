<!-- 
created_at: 
email:
first_name: "Bernadine"
last_name: "Peers"
phone:
tenant_id:
updated_at: null
user_id: null
-->

<script setup>
let props = defineProps({
  data: Object
})

let starsInt = props.data.stars
let rating = '★'.repeat(starsInt) + '☆'.repeat(5 - starsInt)
</script>

<template>
  <RouterLink :to="`/tenant/${data.tenant_id}`" class="nav-link">
    <div class="card my-2 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ data.first_name + ' ' + data.last_name }}</h5>
        <h6>{{ rating }}</h6>
        <pre class="card-text">{{ data.phone }}</pre>
      </div>
    </div>
  </RouterLink>
</template>
