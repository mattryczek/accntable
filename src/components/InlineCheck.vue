<script setup>
defineEmits(['update:modelValue'])

const props = defineProps({
    label: String,
    modelValue: Boolean
})
</script>

<template>
    <div class="d-flex">
        <div class="me-auto">
            {{ props.label }}
        </div>

        <div class="form-check form-switch me-2">
            <input 
                :checked="modelValue"
                @input="$emit('update:modelValue', $event.target.checked)"
                class="form-check-input" 
                type="checkbox" 
                role="switch"
            />
        </div>
    </div>
    <hr />
</template>