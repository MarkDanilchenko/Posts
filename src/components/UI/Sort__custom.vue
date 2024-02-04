<template>
    <select name="" id="" @change="$emit('update:modelValue', $event.target.value)">
        <option disabled selected value="">Choose from the list</option>
        <option v-for="i in options" :key="i.value" :value="i.value">{{ i.name }}</option>
    </select>
</template>

<script>
export default {
    name: 'Sort__custom',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style scoped></style>