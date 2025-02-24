import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/router.js";
import store from "@/store/index.js";
import "@/assets/scss/index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@/assets/js/index.js";
import directives from "@/directives/index.js";
import UIcomponents from "@/components/UI/index.js";

window.$ = window.jQuery = require("jquery");

const app = createApp(App);

UIcomponents.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
