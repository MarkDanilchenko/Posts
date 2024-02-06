<template>
    <section class="post-item">
        <div class="post">
            <div>
                <div>ID: <b>{{ post.id }}</b></div>
                <div>Title: <b>{{ post.title }}</b></div>
                <div>Description: {{ post.body }}</div>
            </div>
            <div class="postItem__buttons">
                <Button__custom @click="$emit('remove', post)">Delete</Button__custom>
                <Button__custom @click="$router.push(`/posts/${post.id}`)">More</Button__custom>
            </div>
        </div>
    </section>
</template>

<script>
import Button__custom from './UI/Button__custom.vue';

export default {
    name: 'PostItem',
    props: ['post'],
    methods: {},
    components: { Button__custom }
}
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.postItem__buttons {
    display: flex;
    gap: 10px;
}
</style>