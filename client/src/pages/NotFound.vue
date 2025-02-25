<template>
  <section class="my-notFound">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <nav aria-label="breadcrumb" class="my-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Main</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">404 Not Found</li>
        </ol>
      </nav>
      <div class="text-center lead">
        <div class="mod">
          <div class="cube">
            <div class="faces f1">
              <div class="dot p1"></div>
              <div class="dot p2"></div>
              <div class="dot p3"></div>
              <div class="dot p4"></div>
              <div class="dot p5"></div>
              <div class="dot p6"></div>
              <div class="dot p7"></div>
              <div class="dot p8"></div>
              <div class="dot p9"></div>
            </div>
            <div class="faces f2">
              <div class="dot p10"></div>
              <div class="dot p11"></div>
              <div class="dot p12"></div>
              <div class="dot p13"></div>
            </div>
            <div class="faces f3">
              <div class="dot p1"></div>
              <div class="dot p2"></div>
              <div class="dot p3"></div>
              <div class="dot p4"></div>
              <div class="dot p5"></div>
              <div class="dot p6"></div>
              <div class="dot p7"></div>
              <div class="dot p8"></div>
              <div class="dot p9"></div>
            </div>
            <div class="faces f4">
              <div class="dot p10"></div>
              <div class="dot p11"></div>
              <div class="dot p12"></div>
              <div class="dot p13"></div>
            </div>
            <div class="faces f5">
              <div class="dot p1"></div>
              <div class="dot p2"></div>
              <div class="dot p3"></div>
              <div class="dot p4"></div>
              <div class="dot p5"></div>
              <div class="dot p6"></div>
              <div class="dot p7"></div>
              <div class="dot p8"></div>
              <div class="dot p9"></div>
            </div>
            <div class="faces f6">
              <div class="dot p10"></div>
              <div class="dot p11"></div>
              <div class="dot p12"></div>
              <div class="dot p13"></div>
            </div>
            <div class="faces f7">
              <div class="dot p1"></div>
              <div class="dot p2"></div>
              <div class="dot p3"></div>
              <div class="dot p4"></div>
              <div class="dot p5"></div>
              <div class="dot p6"></div>
              <div class="dot p7"></div>
              <div class="dot p8"></div>
              <div class="dot p9"></div>
            </div>
            <div class="faces f8">
              <div class="dot p10"></div>
              <div class="dot p11"></div>
              <div class="dot p12"></div>
              <div class="dot p13"></div>
            </div>
            <div class="faces f9">
              <div class="dot p1"></div>
              <div class="dot p2"></div>
              <div class="dot p3"></div>
              <div class="dot p4"></div>
              <div class="dot p5"></div>
              <div class="dot p6"></div>
              <div class="dot p7"></div>
              <div class="dot p8"></div>
              <div class="dot p9"></div>
            </div>
            <div class="faces f10">
              <div class="dot p10"></div>
              <div class="dot p11"></div>
              <div class="dot p12"></div>
              <div class="dot p13"></div>
            </div>
            <div class="faces f11">
              <div class="dot p1"></div>
              <div class="dot p2"></div>
              <div class="dot p3"></div>
              <div class="dot p4"></div>
              <div class="dot p5"></div>
              <div class="dot p6"></div>
              <div class="dot p7"></div>
              <div class="dot p8"></div>
              <div class="dot p9"></div>
            </div>
          </div>
          <div class="project-name">
            <p>
              <span class="text-green">404</span>
              <br />
              Page <br />
              <span class="text-green">Not Found</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dotsInit from "@/mixins/dotsInit";

export default {
  name: "NotFound",
  mixins: [dotsInit],
};
</script>

<style scoped lang="scss"></style>
