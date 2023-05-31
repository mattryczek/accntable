<script setup>
import { ref, computed } from 'vue'

defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: String
})
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-9">
      <div id="search" class="d-flex flex-wrap justify-content-center">
        <div class="p-1 flex-grow-1">
          <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="form-control"
            type="search"
            name="query"
            placeholder="Address, Name, Firm or ZIP"
          />
        </div>
        <div class="p-1">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#search {
  margin-top: 10%;
  margin-bottom: 5%;
}
</style>
