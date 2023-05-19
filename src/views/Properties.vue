<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@comp/Footer.vue'
import PropertyCard from '@comp/PropertyCard.vue'
import Filters from '@comp/PropertyFilterCard.vue'

import { supabase } from '@/supabase'

let { data: properties, error } = await supabase
  .from('property')
  .select()
  .limit(5)
  .order('created_at', {ascending: false})

</script>

<template>
  <Navbar />
  <div class="properties container mt-3">

    <div class="row">
      <div class="col-3">
        <Filters />
      </div>

      <div class="col-9">
        <div class="row row-cols-1">
          <!-- row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 -->
          <PropertyCard class="mb-2" v-for="property in properties" :key="property.property_id" :data="property" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style></style>
