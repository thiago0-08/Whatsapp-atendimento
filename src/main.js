import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { VTooltip } from 'v-tooltip';
import apiClient from '@/views/api';
import './assets/main.css'



const app = createApp(App);

app.provide('axios', apiClient); 
app.use(VTooltip);
app.use(router);
app.mount('#app');
