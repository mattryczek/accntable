<script setup>
const props = defineProps({
    label: String
})
</script>

<template>
    <div class="mb-2">
        <h6> {{ label }}</h6>
        
        <input type="radio" class="btn-check" :name="`${label}`" :id="`${label}-option1`" autocomplete="off">
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option1`">1</label>

        <input type="radio" class="btn-check" :name="`${label}`" :id="`${label}-option2`" autocomplete="off">
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option2`">2</label>

        <input type="radio" class="btn-check" :name="`${label}`" :id="`${label}-option3`" autocomplete="off" checked>
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option3`">3</label>

        <input type="radio" class="btn-check" :name="`${label}`" :id="`${label}-option4`" autocomplete="off">
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option4`">4</label>

        <input type="radio" class="btn-check" :name="`${label}`" :id="`${label}-option5`" autocomplete="off">
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option5`">5</label>
    </div>
</template>