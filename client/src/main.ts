import { createApp } from 'vue';
import App from './App.vue';
import { store } from './core/store';
import { ui } from './core/ui';

createApp(App).use(store).use(ui).mount('#app');
