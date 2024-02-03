<template>
    <button class="btn__custom">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button__custom',
}
</script>

<style scoped>
.btn__custom {
    margin-top: 15px;
    padding: 15px;
    background-color: teal;
    border: 2px solid black;
    border-radius: 5px;
}

.btn__custom:hover {
    background-color: rgb(0, 0, 0);
    color: white;
}
</style>