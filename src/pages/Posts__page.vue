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
                    <Button__custom type="button" data-bs-toggle="modal" data-bs-target="#addPostModal">
                        Add post</Button__custom>
                </div>
                <!-- Download posts -->
                <!-- Download posts -->
                <!-- Download posts -->
                <div class="col-md-2 col-3 m-0 p-0 px-1" style="width: fit-content;">
                    <Button__custom @click="fetchPosts">Refresh</Button__custom>
                </div>
            </div>

        </div>
        <!-- addPostDialogModal -->
        <!-- addPostDialogModal -->
        <!-- addPostDialogModal -->
        <div class="modal fade" id="addPostModal" tabindex="-1" aria-labelledby="addPostModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="addPostModalLabel">Add post</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <InputText__custom v-model="addPostModal__title" class="mb-3" placeholder="Post title...">
                        </InputText__custom>
                        <div class="form-floating">
                            <textarea v-model="addPostModal__content" class="form-control" style="height: 100px;"
                                placeholder="Post content..." id="floatingTextarea"></textarea>
                            <label for="floatingTextarea" class="text-muted">Post content...</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                        <Button__custom type="button" @click="addNewPost" data-bs-dismiss="modal">Save</Button__custom>
                    </div>
                </div>
            </div>
        </div>
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
import Button__custom from '@/components/UI/Button__custom.vue';
import InputText__custom from '@/components/UI/InputText__custom.vue';
export default {
    name: 'App',
    components: {
        PostList,
        Button__custom,
        InputText__custom
    },
    data() {
        return {
            addPostModal__title: '',
            addPostModal__content: ''
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
            fetchPostsBand: 'posts/fetchPostsBand',
            addPostToStore: 'posts/addPostToStore'
        }),
        addNewPost() {
            const newPost = {
                id: Date.now(),
                title: this.addPostModal__title,
                body: this.addPostModal__content
            }
            this.addPostToStore(newPost);
            this.addPostModal__content = '';
            this.addPostModal__title = '';
        },
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