<script setup>
// https://stackoverflow.com/a/74286664
import { useRoute } from 'vue-router'

import Navbar from '@comp/Navbar.vue'
import ReviewCard from '@comp/ReviewCard.vue'
import ScoreCard from '@comp/TenantScoreCard.vue'
import ReviewForm from '@comp/TenantReviewform.vue'
import Footer from '@comp/Footer.vue'

const route = useRoute()

import { supabase } from '@/supabase'

let { data: current, error } = await supabase
    .from('tenant')
    .select()
    .eq('tenant_id', route.params.id)

current = current[0]

let { data: reviews, error2 } = await supabase
    .from('tenant_ratings')
    .select('notes, name, created_at')
    .eq('tenant_id', route.params.id)

let { data: avg_ratings, error3 } = await supabase
    .from('tenant_average_rating')
    .select()
    .eq('tenant_id', route.params.id)

async function post_data(data) {
    data["tenant_id"] = route.params.id
    data["created_at"] = new Date().toISOString()

    const { error } = await supabase
        .from('tenant_ratings')
        .insert(data)

}

</script>

<template>
    <Navbar />
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>{{ current.first_name + ' ' + current.last_name }}</h1>
                <h5 class="text-muted fw-lighter">{{ current.email }}</h5>
            </div>

            <div class="col">
                <ScoreCard :key="current.tenant_id" :data="avg_ratings[0]" />
            </div>
        </div>

        <ReviewForm @response="r => post_data(r)" />

        <div class="accordion my-4" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        Reviews about {{ current.first_name }}
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div id="reviews" class="container mt-2">
                            <ReviewCard v-for="review in reviews" :key="review.tenant_rating_id" :data="review" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Reviews {{ current.first_name }} authored
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div id="reviews" class="container mt-4">
                            <!-- <ReviewCard v-for="review in reviews" :key="review.id" :data="review" /> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style></style>
