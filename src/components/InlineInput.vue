<script setup>
const props = defineProps({
  label: String,
  internal: String
})
</script>

<template>
  <div class="mb-2">
    <h6>{{ label }}</h6>

    <div class="d-flex">
      <div class="col-4">
        <input
          :name="`${internal}`"
          :id="`${label}-option1`"
          class="form-control form-control-sm"
          type="number"
        />
      </div>
    </div>
  </div>
</template>
