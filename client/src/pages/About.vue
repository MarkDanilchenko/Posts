<template>
  <section class="my-about">
    <div class="d-flex flex-column align-items-center justify-content-center">
      <nav aria-label="breadcrumb" class="my-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">About</li>
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
              <span class="text-green">About information</span>
            </p>
          </div>
          <div class="project-description">
            <p>
              <span
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sequi perferendis magni excepturi
                cum reiciendis nostrum, sunt rem eum reprehenderit quam sint deserunt aliquam voluptate ipsam
                consequuntur nesciunt cumque consectetur? Molestias cupiditate debitis libero omnis consequuntur, odio
                eveniet ut minima maxime qui nostrum officiis iste eligendi nemo dolorum quisquam. Est voluptatum aut
                quae, quo nam dicta vero veniam impedit nisi. Incidunt dignissimos error consectetur harum, quod vel.
                Deserunt dignissimos fuga quas delectus inventore accusamus ipsa odit eligendi, vitae nobis veritatis
                sed itaque saepe dolor minus minima necessitatibus aperiam unde fugiat? Enim natus velit dolor
                blanditiis! Quos similique nesciunt ab sunt commodi praesentium assumenda aliquam fugit excepturi,
                consequatur eum nisi quo tempora, ducimus distinctio veritatis cumque! Provident commodi in quae hic.
                Molestiae magnam alias iusto quam! Expedita, aut cum? Voluptate, fugiat molestiae corporis quisquam
                soluta laudantium dolore corrupti. Officiis reiciendis, rerum accusantium repellendus animi voluptatum
                dolore consequatur molestiae dignissimos suscipit reprehenderit!</span
              >
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
  name: "About",
  mixins: [dotsInit],
};
</script>

<style scoped lang="scss"></style>
