<script setup>
import StarDisplay from '@comp/StarDisplay.vue'

let ratingsObj = defineProps({
  data: Object
})

let ratings = ratingsObj.data

function transform(number) {
  return '★'.repeat(number) + '☆'.repeat(5 - number)
}
</script>

<template>
  <div class="card">
    <h5 class="card-header">Detailed Ratings</h5>
    <div class="card-body row">
      <div class="col">
        <p class="card-text">
          Responsiveness
          <br />
          <StarDisplay :star_count="ratings.timeliness_responsiveness" />
        </p>
        <p class="card-text">
          Friendliness
          <br />
          <StarDisplay :star_count="ratings.friendliness" />
        </p>
        <p class="card-text">
          Management
          <br />
          <StarDisplay :star_count="ratings.management_abilities" />
        </p>
      </div>
      <div class="col">
        <p class="card-text">
          Maintenance
          <br />
          <StarDisplay :star_count="ratings.maintenance" />
        </p>
        <p class="card-text">
          Rental Rate
          <br />
          <StarDisplay :star_count="ratings.reasonable_rate" />
        </p>
        <p class="card-text">
          Communication
          <br />
          <StarDisplay :star_count="ratings.communication" />
        </p>
      </div>
    </div>
  </div>
</template>
