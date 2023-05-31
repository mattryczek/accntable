<script setup>
import { ref } from 'vue'

import Navbar from '@comp/Navbar.vue'
import MainSearch from '@comp/MainSearch.vue'

import PropertyCard from '@comp/PropertyCard.vue'
import ManagerCard from '@comp/ManagerCard.vue'
import TenantCard from '@comp/TenantCard.vue'

import { supabase } from '@/supabase'

const search_query = ref("")
const properties = ref(0)
const managers = ref(0)
const tenants = ref(0)

async function formOnSubmit(e) {
  let formData = new FormData(e.target)
  formData = Object.fromEntries(formData)

  properties.value = await get_properties(formData.query)
  managers.value = await get_managers(formData.query)
  tenants.value = await get_tenants(formData.query)

  console.log(properties.value)


  // https://stackoverflow.com/a/58239634
  // e.target.reset()
  // search_query.value = ""
}

function _map(obj, func) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}

async function get_properties(query) {

  let { data: result, error } = await supabase
    .from('property_char_view')
    .select()

  query = query.toUpperCase()

  return result.filter(e => e.address_ln1.toUpperCase().includes(query)
    || e.city.toUpperCase().includes(query)
    || e.state.toUpperCase().includes(query)
    || e.zip.toUpperCase().includes(query)
  )

}

async function get_managers(query) {

  let { data: result, error } = await supabase
    .from('property_manager')
    .select()

  query = query.toUpperCase()

  return result.filter(e => e.business_name.toUpperCase().includes(query)
    || e.address_ln1.toUpperCase().includes(query)
    || e.city.toUpperCase().includes(query)
    || e.zip.toUpperCase().includes(query)
    || e.phone.toUpperCase().includes(query)
    || e.email.toUpperCase().includes(query)
  )
}

async function get_tenants(query) {

  let { data: result, error } = await supabase
    .from('tenant')
    .select('first_name, last_name, email, tenant_id')

  query = query.toUpperCase()

  return result.filter(e => e.first_name.toUpperCase().includes(query)
    || e.last_name.toUpperCase().includes(query)
    || e.email.toUpperCase().includes(query)
  )
}

</script>

<template>
  <Navbar />
  <div class="home container">
    <form @submit.prevent="formOnSubmit">
      <MainSearch v-model="search_query" />
    </form>

    <div class="d-flex flex-wrap mb-4" v-if="properties.length > 0">
      <div class="d-flex flex-wrap" style="width: 100%;">
        <p class="fs-1">{{ search_query }}</p>
        <p class="fs-1 fw-lighter">&nbsp;| Properties</p>
      </div>

      <div class="d-flex flex-wrap">
        <PropertyCard v-for="property in properties" :key="property.property_id" :data="property" class="mx-1 mb-2" />
      </div>
    </div>

    <div class="d-flex flex-wrap mb-4" v-if="managers.length > 0">
      <div class="d-flex flex-wrap" style="width: 100%;">
        <p class="fs-1">{{ search_query }}</p>
        <p class="fs-1 fw-lighter">&nbsp;| Property Managers</p>
      </div>

      <div class="d-flex flex-wrap">
        <ManagerCard v-for="manager in managers" :key="manager.prop_manager_id" :data="manager" class="mx-1 mb-2" />
      </div>
    </div>

    <div class="d-flex flex-wrap" v-if="tenants.length > 0">
      <div class="d-flex flex-wrap" style="width: 100%;">
        <p class="fs-1">{{ search_query }}</p>
        <p class="fs-1 fw-lighter">&nbsp;| Tenants</p>
      </div>

      <div class="d-flex flex-wrap">
        <TenantCard v-for="tenant in tenants" :key="tenant.tenant_id" :data="tenant" class="mx-1 mb-2" />
      </div>
    </div>

  </div>
</template>
