<script setup>
import { ref } from 'vue'
import { supabase } from '@/supabase'

const props = defineProps({
  data: Object
})

function transform(iso_string) {
  return new Date(iso_string).toLocaleDateString()
}

const thumbsup = ref(props.data.thumbs_up)
const thumbsdown = ref(props.data.thumbs_down)

async function upvote() {

  const { error } = await supabase
    .from('pm_ratings')
    .update({ thumbs_up: ++thumbsup.value })
    .eq('pm_rating_id', props.data.pm_rating_id)

}


async function downvote() {

  const { error } = await supabase
    .from('pm_ratings')
    .update({ thumbs_down: ++thumbsdown.value })
    .eq('pm_rating_id', props.data.pm_rating_id)
  
}
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">
        {{ data.author }} | <small class="text-muted">{{ transform(data.created_at) }}</small>
      </h5>
      <p class="card-text">{{ data.notes }}</p>
      <button @click="upvote" class="btn btn-outline-success me-2">👍 {{ thumbsup }}</button>
      <button @click="downvote" class="btn btn-outline-danger">👎 {{ thumbsdown }}</button>
    </div>
  </div>
</template>

<style></style>
