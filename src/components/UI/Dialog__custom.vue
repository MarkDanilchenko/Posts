<template>
    <div v-if="show" class="dialog">
        <div class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dialog__custom',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped></style>