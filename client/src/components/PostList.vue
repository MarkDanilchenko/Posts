<template>
  <section class="my-postList">
    <div class="row">
      <div class="d-flex justify-content-center">
        <div class="col-lg-8 col-md-10 col-12">
          <transition-group name="postList" tag="div">
            <PostItem v-for="post in posts" :key="post.id" :post="post" />
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  name: "PostList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/colors.scss";

.postList-enter-active,
.postList-leave-active {
  transition: all 0.5s ease;
}

.postList-enter-from,
.postList-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.postList-leave-from {
  box-shadow: -10px 0px 0px 0px $red_color;
}
</style>
