<template>
    <section class="app">
        <h1 id="h1__title">Posts list</h1>
        <!-- modal PostForm -->
        <div id="btnBlock">
            <Button__custom @click="showDialog__PostForm">Add post</Button__custom>
            <Button__custom @click="fetchPosts">Download posts</Button__custom>
        </div>
        <Dialog__custom v-model:show="Dialog_postForm__visibility">
            <PostForm @addPost="addPost" />
        </Dialog__custom>
        <!--  -->
        <PostList v-if="!posts_loading" :posts="posts" @remove="removePost" />
        <div class="loading" v-else>Loading...</div>
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
        Button__custom,
    },
    data() {
        return {
            posts: [],
            Dialog_postForm__visibility: false,
            posts_loading: true
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
        },
        async fetchPosts() {
            this.posts_loading = true
            setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: null,
                }).then((response) => {
                    return response.json()
                }).then((data) => {
                    this.posts = data
                    this.posts_loading = false
                }).catch((error) => {
                    alert(error.message)
                })
            }, 3000);
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script>

<style>
#btnBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

#btnBlock>* {
    margin-right: 15px;
}

.loading {
    padding: 15px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    color: teal;
}

#h1__title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: teal;
}
</style>