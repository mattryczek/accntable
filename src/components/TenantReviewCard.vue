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

const { data: images, error } = await supabase
  .from('review_images')
  .select('image_id, link')
  .eq('tn_review_id', props.data.tenant_rating_id)

async function upvote() {

  const { error } = await supabase
    .from('tenant_ratings')
    .update({ thumbs_up: ++thumbsup.value })
    .eq('tenant_rating_id', props.data.tenant_rating_id)

}

async function downvote() {

  const { error } = await supabase
    .from('tenant_ratings')
    .update({ thumbs_down: ++thumbsdown.value })
    .eq('tenant_rating_id', props.data.tenant_rating_id)
  
}
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">
        {{ data.author }} | <small class="text-muted">{{ transform(data.created_at) }}</small>
      </h5>

      <p class="card-text mt-2">{{ data.notes }}</p>
      <img class="img-thumbnail me-1 mt-1" v-for="image in images" :key="image.image_id" :src="image.link">

      <div class="mt-3">
        <button @click="upvote" class="btn btn-outline-success me-2">👍 {{ thumbsup }}</button>
        <button @click="downvote" class="btn btn-outline-danger">👎 {{ thumbsdown }}</button>
      </div>

    </div>
  </div>
</template>

<style>
img {
  max-width: 200px;
  max-height: 200px;
}
</style>
