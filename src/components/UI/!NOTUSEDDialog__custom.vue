<template>
    <div v-if="show" class="d-flex justify-content-center align-items-center dialog__window" @click="$emit('update:show', false)">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dialog__custom',
    props: {
        show: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style scoped>
.dialog__window {
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>