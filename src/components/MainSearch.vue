<script setup>
import { ref } from 'vue'

const placeholder = ref('Address, Name, Firm or ZIP')
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-9">
      <div id="search" class="d-flex flex-wrap justify-content-center">
        <div class="p-1 flex-grow-1">
          <input class="form-control" type="search" :placeholder="placeholder" />
        </div>
        <div class="p-1">
          <button class="btn btn-outline-secondary me-2">Filters</button>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#search {
  margin-top: 30%;
}
</style>
