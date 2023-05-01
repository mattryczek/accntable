<!-- 
"id":
"name":
"address":
"city":
"state":
"zip":
"stars":
"image_url":
-->

<script setup>
let props = defineProps({
  data: Object
})

let starsInt = props.data.stars
let rating = '★'.repeat(starsInt) + '☆'.repeat(5 - starsInt)
</script>

<template>
  <RouterLink :to="`/tenant/${data.id}`" class="nav-link">
    <div class="card my-2 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <h6>{{ rating }}</h6>
        <pre class="card-text">{{
           data.city + ', ' + data.state
        }}</pre>
      </div>
    </div>
  </RouterLink>
</template>
