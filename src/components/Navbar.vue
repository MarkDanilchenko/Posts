<template>
    <div class="navbar">
        <h3 @click="$router.push('/')">Vue 3 test project</h3>
        <div class="navbar__links">
            <!-- <router-link to="/">Main</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/posts">Posts</router-link> -->
            <Button__custom @click="$router.push('/posts')">Posts</Button__custom>
            <Button__custom @click="$router.push('/about')">About</Button__custom>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
h3 {
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    color: teal;
    cursor: pointer;
}
h3:hover {
    color: rgb(0, 0, 0);
}
.navbar {
    min-height: 30px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid teal;
    border-radius: 5px;
    margin: 5px;
}

.navbar__links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.navbar__links a {
    color: teal;
    text-decoration: none;
}

.navbar__links a:hover, .navbar__links a:active {
    color: rgb(0, 0, 0);
    font-weight: bold;
}
</style>