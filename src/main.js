import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import './assets/HomeView.css';
import './assets/AboutView.css';
import './assets/ProjectsView.css';

document.title = `Ramazan KUS`;

const app = createApp(App);
app.use(router);
app.mount('#app');

