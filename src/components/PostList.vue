<template>
    <section class="post-list">
        <div v-if="posts.length === 0" class="no-posts">No posts</div>
        <div v-else>
            <PostItem v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)" />
        </div>
    </section>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
    name: 'PostList',
    components: {
        PostItem
    },
    props: ['posts'],
    data() {
    }

}
</script>

<style scoped>
.no-posts {
    padding: 15px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    color: teal;
}
</style>