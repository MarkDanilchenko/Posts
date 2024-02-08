<template>
    <section class="app">
        <div class="d-flex flex-column align-items-center justify-content-center">
            <nav aria-label="breadcrumb" class="my-3">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">Main</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">Posts</li>

                </ol>
            </nav>
        </div>
        <div id="mainLogo" class="d-flex justify-content-center align-items-center">
            <section class="wrapper">
                <div class="top">Posts'</div>
                <div class="bottom" aria-hidden="true">Posts'</div>
            </section>
        </div>
        <div id="btnBlock">
            <!-- Search -->
            <!-- Search -->
            <!-- Search -->
            <!-- <InputText__custom v-model="searchQuery" v-focus placeholder="Search..." /> -->
            <!-- Sort -->
            <!-- Sort -->
            <!-- Sort -->
            <!-- <div>
                <h3>Sort by</h3>
                <Sort__custom v-model="selectedSort" :options="sortOptions" />
            </div> -->
            <!-- DialogShow -->
            <!-- DialogShow -->
            <!-- DialogShow -->
            <!-- <Button__custom @click="showDialog__PostForm">Add post</Button__custom> -->
            <!-- Download posts -->
            <!-- Download posts -->
            <!-- Download posts -->
            <!-- <Button__custom @click="fetchPosts">Download posts</Button__custom> -->
        </div>
        <!-- DialogModal -->
        <!-- DialogModal -->
        <!-- DialogModal -->
        <!-- <Dialog__custom v-model:show="Dialog_postForm__visibility">
            <PostForm @addPost="addPost" />
        </Dialog__custom> -->
        <!-- PostList -->
        <!-- PostList -->
        <!-- PostList -->
        <PostList v-if="!posts_loading" :posts="postSortAndSearch" @remove="removePost" />
        <div v-else class="posts_loading d-flex justify-content-center align-items-center">
            <div class="spinner-grow me-3" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div>
                <span>Loading...</span>
            </div>
        </div>
        <!-- Dynamic posts band loading -->
        <!-- Dynamic posts band loading -->
        <!-- Dynamic posts band loading -->
        <div v-if="!postsEnd" ref="observer" class="observer"></div>
        <!-- Pagination via posts -->
        <!-- Pagination via posts -->
        <!-- Pagination via posts -->
        <!-- <Pagination__custom v-if="!posts_loading" :totalPages="totalPages" :page="page" @changePage="changePage" /> -->
        <div v-if="postsEnd" id="postsEnd">No more posts...</div>
    </section>
</template>

<script>
import PostList from '@/components/PostList.vue'
// import PostForm from '@/components/PostForm.vue'
export default {
    name: 'App',
    components: {
        PostList,
        // PostForm,
    },
    data() {
        return {
            posts: [],
            posts_loading: true,
            // Dialog_postForm__visibility: false,
            selectedSort: '',
            sortOptions: [
                { value: 'title', name: 'By title' },
                { value: 'body', name: 'By description' },
                { value: 'id', name: 'By ID' },
            ],
            searchQuery: '',
            page: 1,
            limit: 10,
            // totalPages count for pagination usage
            totalPages: 0,
            postsEnd: false
        }
    },
    methods: {
        //     addPost(post) {
        //         this.posts.unshift(post);
        //         this.Dialog_postForm__visibility = false
        //     },
        //     removePost(post) {
        //         this.posts = this.posts.filter((i) => i.id !== post.id)
        //     },
        //     showDialog__PostForm() {
        //         this.Dialog_postForm__visibility = !this.Dialog_postForm__visibility
        //     },
        async fetchPosts() {
            this.posts_loading = true
            this.page = 1
            setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams({ _page: this.page, _limit: this.limit }), {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: null,
                }).then((response) => {
                    this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit)
                    return response.json()
                }).then((data) => {
                    this.posts = data
                    this.posts_loading = false
                }).catch((error) => {
                    alert(error.message)
                })
            }, 2000);
        },
        // Dynamic posts band loading
        // Dynamic posts band loading
        // Dynamic posts band loading
        async fetchPostsBand() {
            fetch('https://jsonplaceholder.typicode.com/posts?' + new URLSearchParams({ _page: this.page, _limit: this.limit }), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null,
            }).then((response) => {
                this.totalPages = Math.ceil(response.headers.get('x-total-count') / this.limit)
                return response.json()
            }).then((data) => {
                this.posts = [...this.posts, ...data]
            }).catch((error) => {
                alert(error.message)
            });
        },
        // changePage(pageNumber) {
        //     this.page = pageNumber
        //     this.fetchPosts()
        // }
    },
    mounted() {
        this.fetchPosts();
        // Dynamic posts band loading
        // Dynamic posts band loading
        // Dynamic posts band loading
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && this.page < this.totalPages) {
                this.page += 1;
                this.fetchPostsBand();
            } else if (this.page === this.totalPages) {
                this.postsEnd = true;
            }
        });
        observer.observe(this.$refs.observer)
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

<style scoped lang="scss">
@import '@/assets/scss/colors.scss';

.posts_loading {
    color: $green-color;
    font-weight: 700;
    font-size: 32px;
    position: relative;
    top: 10vh;

    div:first-child {
        box-shadow: 0px 0px 10px 0px $green-color;
    }
}

// #btnBlock {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top: 15px;
// }

// #btnBlock>* {
//     margin-right: 15px;
// }

// #btnBlock>div {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

.observer {
    height: 30px;
}

#postsEnd {
    color: $green-color;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 32px;
    text-shadow: 0px 0px 10px $green-color;
}
</style>