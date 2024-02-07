import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router.js';
import store from '@/store/index.js';

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
