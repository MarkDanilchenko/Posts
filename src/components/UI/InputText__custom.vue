<template>
    <input @input="updateInput" class="inputData" type="text">
</template>

<script>
export default {
    name: 'InputText__custom',
    props: ['modelValue'],
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.inputData {
    margin-top: 15px;
    padding: 15px;
}
</style>