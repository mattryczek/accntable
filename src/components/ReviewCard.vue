<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">
        {{ data.author }} | <small class="text-muted">{{ data.created_at }}</small>
      </h5>
      <p class="card-text">{{ data.notes }}</p>
    </div>
  </div>
</template>

<style></style>
