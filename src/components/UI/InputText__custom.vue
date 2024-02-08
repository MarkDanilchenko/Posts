<template>
    <input @input="updateInput" class="form-control" type="text" placeholder="Search..." aria-label="Search">
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

<style scoped></style>