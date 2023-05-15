<script setup>
const props = defineProps({
  data: Object
})

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
