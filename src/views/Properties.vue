<script setup>
import Navbar from '@/components/Navbar.vue';
import Card from '../components/Card.vue';

import propData from '@/assets/json/properties.json'

const properties = propData.properties;

</script>

<template>
  <Navbar />
  <div class="properties container">
    <Card v-for="property in properties" :key="property.id" :data=property />
  </div>
</template>

<style></style>
