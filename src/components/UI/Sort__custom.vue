<template>
    <select name="" id="" class="form-select" @change="$emit('update:modelValue', $event.target.value)">
        <option disabled selected value="">Choose sort option...</option>
        <option v-for="i in sortOptions" :key="i.value" :value="i.value">{{ i.name }}</option>
    </select>
</template>

<script>
export default {
    name: 'Sort__custom',
    props: {
        modelValue: {
            type: String
        },
        sortOptions: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style scoped></style>