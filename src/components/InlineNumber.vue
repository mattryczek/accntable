<script setup>
defineEmits(['update:modelValue'])

const props = defineProps({
  label: String,
  modelValue: Number
})
</script>

<template>
  <div class="d-flex flex-wrap">
    <div class="me-auto">
      {{ props.label }}
    </div>

    <div class="col-4">
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-control form-control-sm"
        type="number"
      />
    </div>
  </div>
  <hr />
</template>