<script setup>
import Navbar from '@/components/Navbar.vue'
import Card from '../components/PropertyCard.vue'

import propData from '@/assets/json/properties.json'

const properties = propData.properties
</script>

<template>
  <Navbar />
  <div class="properties container">
    <div class="row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-3">
      <Card v-for="property in properties" :key="property.id" :data="property" />
    </div>
  </div>
</template>

<style></style>
