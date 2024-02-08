<template>
    <div class="d-flex flex-column align-items-center justify-content-center">
        <nav aria-label="breadcrumb" class="my-3">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/">Main</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">About</li>
            </ol>
        </nav>
        <!-- .dot animation -->
        <!-- .dot animation -->
        <!-- .dot animation -->
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
                    <p>&#9995; Hello on <span class="text-green"><i>about</i></span> page</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dotColorInit_mixin from '@/mixins/dotColorInit_mixin.js';
export default {
    name: 'Main__page',
    mixins: [dotColorInit_mixin],
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/colors.scss';

p {
    font-size: 50px;
    line-height: 1.5;
}

</style>