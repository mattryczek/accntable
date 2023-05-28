<script setup>
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
                    <span>{{ transform(ratings.timeliness_responsiveness) }}</span>
                </p>
                <p class="card-text">
                    Friendliness
                    <br />
                    <span>{{ transform(ratings.friendliness) }}</span>
                </p>
                <p class="card-text">
                    Management
                    <br />
                    <span>{{ transform(ratings.management_abilities) }}</span>
                </p>
            </div>
            <div class="col">
                <p class="card-text">
                    Maintenance
                    <br />
                    <span>{{ transform(ratings.maintenance) }}</span>
                </p>
                <p class="card-text">
                    Rental Rate
                    <br />
                    <span>{{ transform(ratings.reasonable_rate) }}</span>
                </p>
                <p class="card-text">
                    Communication
                    <br />
                    <span>{{ transform(ratings.communication) }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
