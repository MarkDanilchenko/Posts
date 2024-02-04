<template>
    <section class="post-item">
        <div class="post">
            <div>
                <div>ID: <b>{{ post.id }}</b></div>
                <div>Title: <b>{{ post.title }}</b></div>
                <div>Description: {{ post.body }}</div>
            </div>
            <Button__custom @click="$emit('remove', post)">Delete</Button__custom>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PostItem',
    props: ['post'],
    methods: {

    }
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
</style>