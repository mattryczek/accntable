<script setup>
import Navbar from '@comp/Navbar.vue'
import Footer from '@comp/Footer.vue'
import TenantCard from '@comp/TenantCard.vue'

import tenData from '@json/tenants.json'

import { supabase } from '@/supabase'

let { data: tenants, error } = await supabase
  .from('tenant')
  .select()
  .limit(5)

// const tenants = tenData.tenants
</script>

<template>
  <Navbar />
  <div class="tenants container mt-4">
    <TenantCard v-for="tenant in tenants" :key="tenant.id" :data="tenant" />
  </div>
  <Footer />
</template>
