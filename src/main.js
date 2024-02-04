import { createApp } from 'vue';
import App from './App.vue';

// custom UI components from src/components/UI/
import UIcomponents from './components/UI';

const app = createApp(App);

UIcomponents.forEach((component) => {
    app.component(component.name, component);
});

// mount main App component into index.html
app.mount('#app');
