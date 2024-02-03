<template>
    <section class="app">
        <PostForm @addPost="addPost" />
        <PostList :posts="posts" @remove="removePost"/>
    </section>
</template>

<script>
import PostList from './components/PostList.vue'
import PostForm from './components/PostForm.vue'
export default {
    name: 'App',
    components: {
        PostList,
        PostForm
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'JS',
                    body: 'JS body'

                },
                {
                    id: 2,
                    title: 'JSON',
                    body: 'JSON body'
                },
                {
                    id: 3,
                    title: 'Vue',
                    body: 'Vue body'
                },
                {
                    id: 4,
                    title: 'React',
                    body: 'React body'
                },
                {
                    id: 5,
                    title: 'Django',
                    body: 'Django body'
                }
            ],
        }
    },
    methods: {
        addPost(post) {
            this.posts.push(post);
        },
        removePost(post) {
            this.posts = this.posts.filter((i) => i.id !== post.id)
        }
    }
}
</script>

<style>
/* * {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
} */
</style>