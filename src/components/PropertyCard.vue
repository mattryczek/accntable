<script setup>

const props = defineProps({
  data: Object
})

console.log(props.data)

const rent = props.data.rent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

</script>

<template>
  <RouterLink :to="`/property/${data.property_id}`" class="nav-link">
    <div class="card shadow-sm" style="width: 18rem;">
      <img :src="data.image_url" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ data.address_ln1 }}</h5>
        <h5 class="card-text fw-light">{{ data.city + ', ' + data.state + ' ' + data.zip }}</h5>

        <div class="d-flex flex-nowrap">
          <h5 class="me-auto fw-lighter">{{ data.bedrooms }} Bed {{ data.baths }} Bath</h5>
          <h5>${{ rent }}</h5>

        </div>
      </div>
    </div>
  </RouterLink>
</template>