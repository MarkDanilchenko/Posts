<template>
    <section class="post-item-page">
        <div v-if="single_post_loading" class="postPage__loading d-flex justify-content-center align-items-center">
            <div class="spinner-grow me-3" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div>
                <span>Loading...</span>
            </div>
        </div>
        <div v-if="single_post" class="postPage__details d-flex flex-column mt-5 p-3 rounded-3">
            <h5><b>ID:</b> №{{ single_post.id }}</h5>
            <h5 class="text-center"><b>Title:</b> "{{ single_post.title }}"</h5>
            <h5><b>Description:</b> <br> <span class="text-small">{{ postDescriptionStartsWithCapital }}</span></h5>
            <hr>
            <p v-if="single_post.id <= 100" class="text-center text-small text-muted mb-0">All information about this post is available on the
                https://jsonplaceholder.typicode.com</p>
            <div class="d-flex justify-content-end">
                <Button__custom class="mt-3" @click="$router.push('/posts')">Back</Button__custom>
            </div>
        </div>
        <div v-if="!single_post_loading && !single_post"
            class="postPage__notFound text-center d-flex justify-content-center flex-column align-items-center">
            <div>
                <span class="text-green">404</span> <br>
                The post You are looking for <span class="text-green">does not exist</span>.
            </div>
            <Button__custom class="mt-3" @click="$router.push('/posts')">Back</Button__custom>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    name: 'PostItem__page',
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            single_post: state => state.posts.single_post,
            single_post_loading: state => state.posts.single_post_loading,
            single_post_id: state => state.posts.single_post_id,
        }),
        postDescriptionStartsWithCapital() {
            if (this.single_post.body) {
                return this.single_post.body.charAt(0).toUpperCase() + this.single_post.body.slice(1);
            }
        }
    },
    mounted() {
        this.setSinglePostId(Number(this.$route.params.id));
        this.setSinglePostLoading(true);
        this.setSinglePost(null);
        this.fetchPostItem();
    },
    methods: {
        ...mapMutations({
            setSinglePostId: 'posts/setSinglePostId',
            setSinglePost: 'posts/setSinglePost',
            setSinglePostLoading: 'posts/setSinglePostLoading',
        }),
        ...mapActions({
            fetchPostItem: 'posts/fetchPostItem',
        }),
    },
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/colors.scss';

.postPage__loading {
    color: $green-color;
    font-weight: 700;
    font-size: 32px;
    position: relative;
    top: 40vh;

    div:first-child {
        box-shadow: 0px 0px 10px 0px $green-color;
    }
}

.postPage__notFound {
    font-weight: 700;
    font-size: 32px;
    position: relative;
    top: 40vh;
}

.postPage__details {
    box-shadow: 0px 0px 10px 1px $green-color;
}
</style>