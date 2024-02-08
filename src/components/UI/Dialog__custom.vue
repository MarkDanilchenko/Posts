<template>
    <div v-if="show" class="dialog" @click="$emit('update:show', false)">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import showDialog_mixin from '@/mixins/showDialog_mixin.js';
export default {
    name: 'Dialog__custom',
    mixins: [showDialog_mixin],
}
</script>

<style scoped>
.dialog {
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.dialog__content {
    background-color: white;
    padding: 15px;
    border: 2px solid teal;
    border-radius: 15px;
    min-width: 300px;
}
</style>