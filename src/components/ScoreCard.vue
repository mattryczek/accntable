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

let ratings = ratingsObj.data
</script>

<template>
    <div class="card">
        <h5 class="card-header">Detailed Ratings</h5>
        <div class="card-body d-flex flex-wrap">
            <div class="col-md-6">
                <p class="card-text">{{ ratings.responsiveness }}</p>
            </div>
            <div class="col-md-6">
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    </div>
</template>