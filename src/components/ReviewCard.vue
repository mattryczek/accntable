<script setup>
import { ref } from 'vue'

defineProps({
    data: Object
})
</script>

<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rusty_spotted_cat_1.jpg/440px-Rusty_spotted_cat_1.jpg" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-10">
                <div class="card-body">
                    <h5 class="card-title">Just a little guy lol</h5>
                    <p class="card-text">Yeah this place was alright i guess not enough mice tho 7/10</p>
                    <p class="card-text"></p>
                </div>
                
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
</template>

<style></style>