<!-- 
    "id":
    "username":
    "avatar_url": 
    "review_text":
    "post_date":-->

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
                <img :src=data.avatar_url class="img-fluid rounded-start">
            </div>
            <div class="col-md-10">
                <div class="card-body">
                    <h5 class="card-title">{{ data.username }}</h5>
                    <p class="card-text">{{ data.review_text }}</p>
                    <p class="card-text"></p>
                </div>
                
            </div>
            <div class="card-footer">
                <small class="text-muted">{{ data.post_date }}</small>
            </div>
        </div>
    </div>
</template>

<style></style>