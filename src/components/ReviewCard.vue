<!-- 
    "id":
    "username":
    "avatar_url": 
    "review_text":
    "post_date":
  -->

<script setup>
import { ref } from 'vue'

defineProps({
  data: Object
})
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">
        {{ data.name }} | <small class="text-muted">{{ data.created_at }}</small>
      </h5>
      <p class="card-text">{{ data.notes }}</p>
    </div>
  </div>
</template>

<style></style>
