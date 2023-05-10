<script setup>
import Navbar from '@comp/Navbar.vue'
import Footer from '@comp/Footer.vue'
import TenantCard from '@comp/TenantCard.vue'

import { supabase } from '@/supabase'

let { data: tenants, error } = await supabase
  .from('tenant')
  .select()
  .limit(5)

</script>

<template>
  <Navbar />
  <div class="tenants container mt-4">
    <TenantCard v-for="tenant in tenants" :key="tenant.tenant_id" :data="tenant" />
  </div>
  <Footer />
</template>
