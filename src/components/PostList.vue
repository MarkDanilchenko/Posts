<template>
    <section class="post-list">
        <div v-if="posts.length === 0" class="posts__empty d-flex justify-content-center align-items-center">No any post...
        </div>
        <div v-else class="row d-flex justify-content-center">
            <div class="col-lg-8 col-md-10 col-12">
                <transition-group name="postList" tag="div">
                    <PostItem v-for="post in posts" :key="post.id" :post="post" />
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
export default {
    name: 'PostList',
    components: {
        PostItem
    },
    props: ['posts'],
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/colors.scss';

.posts__empty {
    position: relative;
    top: 10vh;
    color: $green-color;
    font-weight: 700;
    font-size: 32px;
    text-shadow: 0px 0px 10px $green-color;
}

.postList-item {
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
    box-shadow: -10px 0px 0px 0px rgb(255, 0, 0);
}

.postList-move {
    transition: transform 0.4s ease;
}
</style>