import { createApp } from 'vue';
import App from './App.vue';
import { store } from './core/store';
import { ui } from './core/ui';
import './style.css';

createApp(App).use(store).use(ui).mount('#app');
