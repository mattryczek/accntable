<!-- 
    JSON Template for Property Object

    address1: String,
    address2: String,
    city: String,
    manager: String,
    phone: String,
    propertyID: Number,
    state: String,
    zip: String,

-->

<script setup>
defineProps({
    data: Object
})
</script>

<template>
    <div class="card my-3">
        <h5 class="card-header"> {{ data.address1 + ' ' + data.address2}}</h5>
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>