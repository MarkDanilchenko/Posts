<template>
    <section class="app">
        <h1 id="h1__title">Posts list</h1>
        <!-- modal PostForm -->
        <div id="btnBlock">
            <InputText__custom v-model="searchQuery" placeholder="Search..." />
            <div>
                <h3>Sort by</h3>
                <Sort__custom v-model="selectedSort" :options="sortOptions" />
            </div>
            <Button__custom @click="showDialog__PostForm">Add post</Button__custom>
            <Button__custom @click="fetchPosts">Download posts</Button__custom>
        </div>
        <Dialog__custom v-model:show="Dialog_postForm__visibility">
            <PostForm @addPost="addPost" />
        </Dialog__custom>
        <!--  -->
        <PostList v-if="!posts_loading" :posts="postSortAndSearch" @remove="removePost" />
        <div class="loading" v-else>Loading...</div>
    </section>
</template>

<script>
import PostList from './components/PostList.vue'
import PostForm from './components/PostForm.vue'
export default {
    name: 'App',
    components: {
        PostList,
        PostForm,
    },
    data() {
        return {
            posts: [],
            Dialog_postForm__visibility: false,
            posts_loading: true,
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: 'By title' },
                { value: 'body', name: 'By description' },
                { value: 'id', name: 'By ID' },
            ],
            searchQuery: ''
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
    },
    computed: {
        postSort() {
            return [...this.posts].sort((a, b) => {
                if (this.selectedSort === 'title') {
                    return a.title.localeCompare(b.title)
                } else if (this.selectedSort === 'body') {
                    return a.body.localeCompare(b.body)
                } else if (this.selectedSort === 'id') {
                    return a.id - b.id
                }
            })
        },
        postSortAndSearch() {
            return this.postSort.filter((post) => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
    // watch: {
    //     selectedSort: {
    //         handler(newValue) {
    //             this.posts.sort((a, b) => {
    //                 if (newValue === 'title') {
    //                     return a.title.localeCompare(b.title)
    //                 } else if (newValue === 'body') {
    //                     return a.body.localeCompare(b.body)
    //                 } else if (newValue === 'id') {
    //                     return a.id - b.id
    //                 }
    //             })
    //         },
    //         deep: true
    //     }
    // }
}
</script>

<style>
#btnBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

#btnBlock > * {
    margin-right: 15px;
}

#btnBlock>div {
    display: flex;
    flex-direction: column;
    align-items: center;
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