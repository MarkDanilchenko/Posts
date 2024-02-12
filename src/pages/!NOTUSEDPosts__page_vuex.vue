<template>
    <section class="app">
        <h1 id="h1__title">Posts list via <u>vuex</u></h1>
        <div id="btnBlock">
            <!-- Search -->
            <!-- Search -->
            <!-- Search -->
            <!-- <InputText__custom v-model="searchQuery" v-focus placeholder="Search..." /> -->
            <InputText__custom :modelValue="searchQuery" @update:modelValue="setSearchQuery" v-focus placeholder="Search..." />
            <!-- Sort -->
            <!-- Sort -->
            <!-- Sort -->
            <div>
                <h3>Sort by</h3>
                <!-- <Sort__custom v-model="selectedSort" :options="sortOptions" /> -->
                <Sort__custom :modelValue="selectedSort" @update:modelValue="setSelectedSort" :options="sortOptions" />
            </div>
            <!-- DialogShow -->
            <!-- DialogShow -->
            <!-- DialogShow -->
            <Button__custom @click="showDialog__PostForm">Add post</Button__custom>
            <!-- Download posts -->
            <!-- Download posts -->
            <!-- Download posts -->
            <Button__custom @click="fetchPosts">Download posts</Button__custom>
        </div>
        <!-- DialogModal -->
        <!-- DialogModal -->
        <!-- DialogModal -->
        <Dialog__custom v-model:show="Dialog_postForm__visibility">
            <PostForm @addPost="addPost" />
        </Dialog__custom>
        <!-- PostList -->
        <!-- PostList -->
        <!-- PostList -->
        <!-- <PostList v-if="!posts_loading" :posts="postSortAndSearch" @remove="removePost" /> -->
        <PostList v-if="!posts_loading" :posts="postSortAndSearch" />
        <div class="loading" v-else>Loading...</div>
        <!-- Dynamic posts band loading -->
        <!-- Dynamic posts band loading -->
        <!-- Dynamic posts band loading -->
        <div v-if="!postsEnd" ref="observer" class="observer"></div>
        <!-- Pagination via posts -->
        <!-- Pagination via posts -->
        <!-- Pagination via posts -->
        <!-- <Pagination__custom v-if="!posts_loading" :totalPages="totalPages" :page="page" @changePage="changePage" /> -->
        <div v-if="postsEnd" id="postsEnd">No more posts</div>
    </section>
</template>

<script>
import PostList from '@/components/PostList.vue';
import PostForm from '@/components/PostForm.vue';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    name: 'App',
    components: {
        PostList,
        PostForm,
    },
    data() {
        return {
            // VUEX used
            // VUEX used
            // VUEX used
            Dialog_postForm__visibility: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage: 'posts/setPage',
            setPostsEnd: 'posts/setPostsEnd',
            setSearchQuery: 'posts/setSearchQuery',
            setSelectedSort: 'posts/setSelectedSort',
        }),
        ...mapActions({
            fetchPosts: 'posts/fetchPosts',
            fetchPostsBand: 'posts/fetchPostsBand'
        }),
        addPost(post) {
            this.posts.unshift(post);
            this.Dialog_postForm__visibility = false
        },
        showDialog__PostForm() {
            this.Dialog_postForm__visibility = !this.Dialog_postForm__visibility
        },
    },
    mounted() {
        this.fetchPosts();
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
            postSort: 'posts/postSort',
            postSortAndSearch: 'posts/postSortAndSearch'
        })
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

<style scoped>
#btnBlock {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

#btnBlock>* {
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

.observer {
    height: 30px;
}

#postsEnd {
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    color: teal;
}
</style>