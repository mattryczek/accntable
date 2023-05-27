<script setup>
import { supabase } from '@/supabase'

const props = defineProps({
  data: Object
})

// let { data: manager, error } = await supabase
//   .from('property_manager')
//   .select('business_name')
//   .eq('prop_manager_id', props.data.prop_manager_id)

</script>

<template>
  <div class="col">
    <RouterLink :to="`/property/${data.property_id}`" class="nav-link">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            {{ data.address_ln1 }}
            <span class="badge text-bg-light">{{ data.address_ln2 }}</span>
          </h5>
          <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
          <!-- <p class="card-text">Managed by {{ manager[0].business_name }}</p> -->
          <pre>{{ data }}</pre>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary"> {{ data.city + ', ' + data.state }}</small>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
