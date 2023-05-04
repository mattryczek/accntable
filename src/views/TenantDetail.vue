<script setup>
// https://stackoverflow.com/a/74286664
import { useRoute } from 'vue-router'

import Navbar from '@comp/Navbar.vue'
import ReviewCard from '@comp/ReviewCard.vue'
import ScoreCard from '@comp/ScoreCard.vue'
import ReviewForm from '@comp/TenantReviewform.vue'
import Footer from '@comp/Footer.vue'

import tenData from '@json/tenants.json'
import reviewData from '@json/reviews.json'

const route = useRoute()
const tenants = tenData.tenants
const reviews = reviewData.reviews

let current = tenants.find((el) => el.id === route.params.id)
</script>

<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{ current.name }}</h1>
                <h5 class="text-muted fw-lighter">{{ current.address }}</h5>
                <h5 class="text-muted fw-lighter">
                    {{ current.city + ', ' + current.state }}
                </h5>
            </div>

            <div class="col">
                <ScoreCard :key="current.id" :data="current.categories" />
            </div>
        </div>

        <ReviewForm />

        <div class="accordion my-4" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        Tenant Bio
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div id="reviews" class="container mt-2">
                            Some fun stuff they can write about themselves here? idk
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Reviews about {{ current.name }}
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div id="reviews" class="container mt-4">
                            <ReviewCard v-for="review in reviews" :key="review.id" :data="review" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Reviews {{ current.name }} authored
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ReviewCard v-for="review in reviews" :key="review.id" :data="review" />
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- <Footer /> -->
</template>

<style></style>
