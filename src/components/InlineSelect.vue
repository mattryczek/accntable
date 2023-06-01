<script setup>
defineEmits(['update:modelValue'])

const props = defineProps({
  label: String,
  options: Array,
  modelValue: String
})
</script>

<template>
  <div class="d-flex">
    <div class="me-auto">{{ props.label }}</div>

    <select
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-select form-select-sm flex-fill ms-4"
    >
      <option></option>
      <option v-for="option in options" :value="option" selected>{{ option }}</option>
    </select>
  </div>
  <hr />
</template>
