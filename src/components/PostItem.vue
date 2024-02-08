<template>
    <section class="post-item">
        <div class="post-item__details rounded-3 p-3 m-3">
            <div class="row">
                <div class="d-flex flex-column col-sm-9 col-12 mb-sm-0 mb-3">
                    <div><b>ID:</b> №{{ post.id }}</div>
                    <div><b>Title:</b> "{{ post.title }}"</div>
                    <br>
                    <div><b>Description:</b> <br> <span class="text-small">{{ postDescriptionStartsWithCapital }}</span></div>
                    <hr class="d-sm-none d-inline-block">
                </div>
                <div class="post-item__buttons d-flex flex-column justify-content-end col-sm-3 col-12">
                    <Button__custom @click="removePost(post.id)">Delete</Button__custom>
                    <Button__custom @click="$router.push(`/posts/${post.id}`)">More</Button__custom>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
    name: 'PostItem',
    props: ['post'],
    methods: {
        ...mapActions({
            removePost: 'posts/removePost'
        })
    },
    computed: {
        postDescriptionStartsWithCapital() {
            return this.post.body.charAt(0).toUpperCase() + this.post.body.slice(1)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/colors.scss';

.post-item__details {
    box-shadow: 0px 0px 10px 1px $green-color;
}

.post-item__buttons {
    button {
        margin-bottom: 5px;
        width: 100%;
    }
}
</style>