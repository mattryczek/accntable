<script setup>
const props = defineProps({
    label: String,
    internal: String
})

</script>

<template>
    <div class="mb-3" >
        <h6> {{ label }}</h6>

        <input type="radio" value="1" class="btn-check" :name="`${internal}`" :id="`${label}-option1`">
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option1`">1</label>

        <input type="radio" value="2" class="btn-check" :name="`${internal}`" :id="`${label}-option2`">
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option2`">2</label>

        <input type="radio" value="3" class="btn-check" :name="`${internal}`" :id="`${label}-option3`">
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option3`">3</label>

        <input type="radio" value="4" class="btn-check" :name="`${internal}`" :id="`${label}-option4`">
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option4`">4</label>

        <input type="radio" value="5" class="btn-check" :name="`${internal}`" :id="`${label}-option5`">
        <label class="btn btn-outline-secondary mx-1" :for="`${label}-option5`">5</label>

    </div>
</template>