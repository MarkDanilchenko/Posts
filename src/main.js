import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router.js';

// custom UI components from src/components/UI/
import UIcomponents from '@/components/UI/index.js';

const app = createApp(App);

UIcomponents.forEach((component) => {
	app.component(component.name, component);
});

// mount main App component into index.html
app.use(router).mount('#app');
