<template>
    <section class="post-form">
        <form action="">
            <fieldset>
                <legend>Add posts!</legend>
                <InputText__custom v-model="title" placeholder="Title"></InputText__custom>
                <InputText__custom v-model="body" placeholder="Description"></InputText__custom>
                <Button__custom type="submit" id="postForm__btn" @click.prevent="createPost">Add</Button__custom>
            </fieldset>
        </form>
    </section>
</template>

<script>
// import Button__custom from './UI/Button__custom.vue' ---> Button__custom is registered globally
export default {
    name: 'PostForm',
    components: {
        // Button__custom
    },
    data() {
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        createPost() {
            const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body
            }
            this.$emit('addPost', newPost)
            this.title = ''
            this.body = ''
        }
    }

}
</script>

<style scoped>
form {
    padding: 15px;
}

fieldset {
    border: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
}

#postForm__btn {
    align-self: flex-end;
}
</style>