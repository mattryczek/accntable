<!-- 
  "responsiveness":
  "friendliness":
  "management":
  "maintenance":
  "rental_rate":
  "communication":
-->

<script setup>
let ratingsObj = defineProps({
  data: Object
})

function transform(ratings) {
  Object.keys(ratings).forEach(
    (k) => (ratings[k] = '★'.repeat(ratings[k]) + '☆'.repeat(5 - ratings[k]))
  )
}

let ratings = ratingsObj.data

transform(ratings)
</script>

<template>
  <div class="card">
    <h5 class="card-header">Detailed Ratings</h5>
    <div class="card-body d-flex flex-wrap">
      <div class="col-md-6 my-2">
        <p class="card-text">
          Responsiveness 
          <br />
          <span class="text-muted">{{ ratings.responsiveness }}</span>
        </p>
        <p class="card-text">Friendliness {{ ratings.friendliness }}</p>
        <p class="card-text">Management {{ ratings.management }}</p>
      </div>
      <div class="col-md-6 my-2">
        <p class="card-text">Maintenance {{ ratings.maintenance }}</p>
        <p class="card-text">Rental Rate {{ ratings.rental_rate }}</p>
        <p class="card-text">Communication {{ ratings.communication }}</p>
      </div>
    </div>
  </div>
</template>
