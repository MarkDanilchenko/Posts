<template>
  <div class="container">
    <Navbar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Bottom />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Bottom from "@/components/Bottom.vue";
import colorModeInit from "./mixins/colorModeInit";

export default {
  name: "App",
  components: {
    Navbar,
    Bottom,
  },
  mixins: [colorModeInit],
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
