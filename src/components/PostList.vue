<template>
    <section class="post-list">
        <div v-if="posts.length === 0" class="no-posts">No posts</div>
        <div v-else>
            <transition-group name="postList" tag="div">
                <PostItem v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)" />
            </transition-group>
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

.postList-item {
    display: inline-block;
    margin-right: 10px;
}

.postList-enter-active,
.postList-leave-active {
    transition: all 0.5s ease;
}

.postList-enter-from,
.postList-leave-to {
    opacity: 0;
    transform: translateX(100px);
}

 .postList-leave-from {
    box-shadow: 0px 0px 5px 5px red;
}

.postList-move {
    transition: transform 0.4s ease;
}
</style>