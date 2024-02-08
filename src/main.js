import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router.js';
import store from '@/store/index.js';
import '@/assets/scss/index.scss';
import '@/assets/js/index.js';

// jQuery usage globally
window.$ = window.jQuery = require('jquery');

// custom UI components from src/components/UI/
import UIcomponents from '@/components/UI/index.js';

// custom directives from src/directives/
import directives from '@/directives/index.js';

const app = createApp(App);

UIcomponents.forEach((component) => {
	app.component(component.name, component);
});

directives.forEach((directive) => {
	app.directive(directive.name, directive);
});

// mount main App component into index.html
app.use(router).use(store).mount('#app');
