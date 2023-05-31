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
const img_id_shim = ref(10000)

const { data: images, error } = await supabase
  .from('review_images')
  .select('image_id, link')
  .eq('tn_review_id', props.data.tenant_rating_id)

const images_ref = ref(images)

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

async function post_image(id) {
  let url = document.getElementById('img_url' + id)

  const { error } = await supabase
    .from('review_images')
    .insert({ tn_review_id: id, link: url.value })

  images_ref.value.unshift({ image_id: img_id_shim.value++, link: url.value })

  url.value = ''
}
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="d-flex">
        <div class="flex-grow-1">
          <h5 class="card-title flex-grow-1">
            {{ data.author }} | <small class="text-muted">{{ transform(data.created_at) }}</small>
          </h5>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-outline-primary"
            data-bs-toggle="modal"
            :data-bs-target="`#image_intake${props.data.tenant_rating_id}`"
          >
            Add Image
          </button>

          <div
            class="modal fade"
            :id="`image_intake${props.data.tenant_rating_id}`"
            tabindex="-1"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <input
                    class="form-control"
                    type="url"
                    :id="`img_url${props.data.tenant_rating_id}`"
                    placeholder="Paste link here..."
                  />
                  <button
                    @click.prevent="post_image(props.data.tenant_rating_id)"
                    type="button"
                    data-bs-dismiss="modal"
                    class="btn btn-outline-primary mt-2"
                  >
                    Add Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="card-text mt-2">{{ data.notes }}</p>
      <img
        class="img-thumbnail me-1 mt-1"
        v-for="image in images_ref"
        :key="image.image_id"
        :src="image.link"
      />

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

.modal {
  margin-top: 40%;
}
</style>
