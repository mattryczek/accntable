<!-- 
    JSON Template for Property Object

    address1: String,
    address2: String,
    city: String,
    manager: String,
    phone: String,
    propertyID: Number,
    state: String,
    zip: String,

-->

<script setup>
import { ref } from 'vue';

defineProps({
  data: Object
})

</script>

<template>
  <div class="col">
    <RouterLink :to="`/property/${data.propertyID}`" class="nav-link">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            {{ data.address1 }}
            <span class="badge text-bg-light">{{ data.address2 }}</span>
          </h5>
          <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
          <p class="card-text">Managed by {{ data.manager }}</p>
          <button type="button" class="btn btn-outline-success my-1">Write a Review...</button>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary"> {{ data.city + ', ' + data.state }}</small>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style>

</style>
