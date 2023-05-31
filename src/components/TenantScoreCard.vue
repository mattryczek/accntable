<!-- 
"tenant_rating_id":
"tenant_id":
"timeliness_responsiveness":
"friendliness":
"communication":
"cleanliness"
"property_condition"
"notes":
-->

<script setup>
import StarDisplay from '@comp/StarDisplay.vue'

let ratingsObj = defineProps({
  data: Object
})

let ratings = ratingsObj.data
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
          Cleanliness
          <br />
          <StarDisplay :star_count="ratings.cleanliness" />
        </p>
      </div>
      <div class="col">
        <p class="card-text">
          Communication
          <br />
          <StarDisplay :star_count="ratings.communication" />
        </p>
        <p class="card-text">
          Property Return Condition
          <br />
          <StarDisplay :star_count="ratings.property_condition" />
        </p>
        <p class="card-text">
          Number of Reports
          <br />
          <span>{{ ratings.reportcount }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
