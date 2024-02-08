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

        <div class="row d-flex justify-content-center">
            <div class="row d-flex justify-content-md-center justify-content-end col-lg-8 col-md-10 col-12">
                <!-- Search -->
                <!-- Search -->
                <!-- Search -->
                <div class="col-md-4 col-12 m-0 mb-md-0 mb-3 p-0 px-1">
                    <InputText__custom :modelValue="searchQuery" @update:modelValue="setSearchQuery" v-focus-custom
                        placeholder="Search..." />
                </div>
                <!-- Sort -->
                <!-- Sort -->
                <!-- Sort -->
                <div class="col-md-4 col-12 m-0 mb-md-0 mb-3 p-0 px-1">
                    <Sort__custom :modelValue="selectedSort" :sortOptions="sortOptions"
                        @update:modelValue="setSelectedSort" />
                </div>
                <!-- DialogShow -->
                <!-- DialogShow -->
                <!-- DialogShow -->
                <div class="col-md-2 col-3 m-0 p-0 px-1" style="width: fit-content;">
                    <Button__custom>Add post</Button__custom>
                </div>
                <!-- Download posts -->
                <!-- Download posts -->
                <!-- Download posts -->
                <div class="col-md-2 col-3 m-0 p-0 px-1" style="width: fit-content;">
                    <Button__custom @click="fetchPosts">Refresh</Button__custom>
                </div>
            </div>

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
        <PostList v-if="!posts_loading" :posts="postSortAndSearch" />
        <div v-else class="posts__loading d-flex justify-content-center align-items-center">
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
        <div v-else id="postsEnd">No more posts...</div>
    </section>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
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
            Dialog_postForm__visibility: false,
        }
    },
    computed: {
        ...mapState({
            posts: state => state.posts.posts,
            posts_loading: state => state.posts.posts_loading,
            selectedSort: state => state.posts.selectedSort,
            sortOptions: state => state.posts.sortOptions,
            searchQuery: state => state.posts.searchQuery,
            page: state => state.posts.page,
            limit: state => state.posts.limit,
            totalPages: state => state.posts.totalPages,
            postsEnd: state => state.posts.postsEnd,
        }),
        ...mapGetters({
            postSortAndSearch: 'posts/postSortAndSearch',
        })
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
                this.setPage(this.page + 1);
                this.fetchPostsBand();
            } else if (this.page === this.totalPages) {
                this.setPostsEnd(true);
            }
        });
        observer.observe(this.$refs.observer)
    },
    methods: {
        ...mapMutations({
            setPage: 'posts/setPage',
            setPostsEnd: 'posts/setPostsEnd',
            setSearchQuery: 'posts/setSearchQuery',
            setSelectedSort: 'posts/setSelectedSort'
        }),
        ...mapActions({
            fetchPosts: 'posts/fetchPosts',
            fetchPostsBand: 'posts/fetchPostsBand'
        })
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
    },

}
</script>

<style scoped lang="scss">
@import '@/assets/scss/colors.scss';

.posts__loading {
    color: $green-color;
    font-weight: 700;
    font-size: 32px;
    position: relative;
    top: 10vh;

    div:first-child {
        box-shadow: 0px 0px 10px 0px $green-color;
    }
}

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