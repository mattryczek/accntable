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
let ratingsObj = defineProps({
    data: Object
})

let ratings = ratingsObj.data

function transform(number) {
    return number //'★'.repeat(number) + '☆'.repeat(5 - number)
}
</script>

<template>
    <div class="card">
        <h5 class="card-header">Detailed Ratings</h5>
        <div class="card-body d-flex flex-wrap">
            <div class="col-md-6 my-2">
                <p class="card-text">
                    Responsiveness
                    <br />
                    <span>{{ transform(ratings.timeliness_responsiveness) }}</span>
                </p>
                <p class="card-text">
                    Friendliness
                    <br />
                    <span>{{ transform(ratings.friendliness) }}</span>
                </p>
                <p class="card-text">
                    Cleanliness
                    <br />
                    <span>{{ transform(ratings.cleanliness) }}</span>
                </p>
            </div>
            <div class="col-md-6 my-2">
                <p class="card-text">
                    Communication
                    <br />
                    <span>{{ transform(ratings.communication) }}</span>
                </p>
                <p class="card-text">
                    Property Return Condition
                    <br />
                    <span>{{ transform(ratings.property_condition) }}</span>
                </p>
                <p class="card-text">
                    Number of times Reported
                    <br />
                    <span>{{ ratings.communication }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
