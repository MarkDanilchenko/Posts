<template>
    <div>
        <div v-if="loading" class="loading">
            <h1>Loading...</h1>
        </div>
        <div v-if="postItem" class="postItem__details">
            <h5>ID: {{ postItem.id }}</h5>
            <h3>{{ postItem.title }}</h3>
            <p>{{ postItem.body }}</p>
            <br />
            <hr>
        </div>
        <div v-if="!loading && !postItem" class="postNotFound">
            <h1>Post not found</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostItem__page',
    data() {
        return {
            postItem: null,
            loading: true,
        }
    },
    methods: {
        async fetchPostItem() {
            fetch('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null,
            }).then((response) => {
                if (response.status === 404) {
                    this.postItem = null
                    this.loading = false
                    return
                }
                return response.json()
            }).then((data) => {
                this.postItem = data;
                this.loading = false
            }).catch((error) => {
                alert(error.message)
            })
        }
    },
    mounted() {
        this.fetchPostItem()
    },
}
</script>

<style scoped>
.postNotFound, .loading {
    padding: 15px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    color: teal;
}
.postItem__details {
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 25px;
    padding: 15px;
    border: 2px solid teal;
    border-radius: 5px;
    text-align: center;
}
</style>