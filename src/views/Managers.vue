<script setup>
import Navbar from '@comp/Navbar.vue'
import Footer from '@comp/Footer.vue'
import ManagerCard from '@comp/ManagerCard.vue'

import { supabase } from '@/supabase'

let { data: managers, error } = await supabase
  .from('property_manager')
  .select()
  .limit(5)
  .order('prop_manager_id', { ascending: true })

  console.log(managers)

</script>

<template>
  <Navbar />
  <div class="managers container mt-4">
    <ManagerCard v-for="manager in managers" :key="manager.prop_manager_id" :data="manager" />
  </div>
  <Footer />
</template>
