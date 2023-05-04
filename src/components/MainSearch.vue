<script setup>
import Filters from '@comp/SearchFilterCard.vue';

import { ref } from 'vue'

</script>

<template>
  <div class="row justify-content-center">
    <div class="col-9">
      <div id="search" class="d-flex flex-wrap justify-content-center">
        <div class="p-1 flex-grow-1">
          <input class="form-control" type="search" :placeholder="`Address, Name, Firm or ZIP`" />
        </div>
        <div class="p-1">
          <button class="btn btn-outline-secondary me-2" data-bs-toggle="collapse" data-bs-target="#filters"
            aria-expanded="false" aria-controls="filters">Filters</button>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </div>

      <div>
        <div class="collapse mt-2 p-1" id="filters">
          <Filters />
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
