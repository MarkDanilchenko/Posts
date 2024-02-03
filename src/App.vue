<template>
    <section class="app">
        <h1>Posts list</h1>
        <!-- modal PostForm -->
        <Button__custom @click="showDialog__PostForm">Add post</Button__custom>
        <Dialog__custom v-model:show="Dialog_postForm__visibility">
            <PostForm @addPost="addPost" />
        </Dialog__custom>
        <!--  -->
        <PostList :posts="posts" @remove="removePost" />
    </section>
</template>

<script>
import PostList from './components/PostList.vue'
import PostForm from './components/PostForm.vue'
import Button__custom from './components/UI/Button__custom.vue';
export default {
    name: 'App',
    components: {
        PostList,
        PostForm,
        Button__custom
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
            Dialog_postForm__visibility: false
        }
    },
    methods: {
        addPost(post) {
            this.posts.push(post);
            this.Dialog_postForm__visibility = false
        },
        removePost(post) {
            this.posts = this.posts.filter((i) => i.id !== post.id)
        },
        showDialog__PostForm() {
            this.Dialog_postForm__visibility = !this.Dialog_postForm__visibility
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