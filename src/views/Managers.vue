<script setup>
import Navbar from '@comp/Navbar.vue'
import Footer from '@comp/Footer.vue'
import ManagerCard from '@comp/ManagerCard.vue';

import manData from '@json/managers.json'

const managers = manData.managers
</script>

<template>
  <Navbar />
  <div class="managers container mt-4">
    <ManagerCard v-for="manager in managers" :key="manager.id" :data="manager" />
  </div>
  <Footer />
</template>