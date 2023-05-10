<!-- 
created_at: 
email:
first_name:
last_name:
phone:
tenant_id:
updated_at: null
user_id: null
-->

<script setup>
import { supabase } from '@/supabase'

let props = defineProps({
  data: Object
})

let { data: rating, error } = await supabase
  .from('tenant_ratings')
  .select()
  .eq('tenant_id', props.data.tenant_id)

</script>

<template>
  <RouterLink :to="`/tenant/${data.tenant_id}`" class="nav-link">
    <div class="card my-2 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ data.first_name + ' ' + data.last_name }}</h5>
        <pre class="card-text">{{ data.email }}</pre>
        <h6>{{ rating[0].cleanliness | 'No rating!' }}</h6>
      </div>
    </div>
  </RouterLink>
</template>
