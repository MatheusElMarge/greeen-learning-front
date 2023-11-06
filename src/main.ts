import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App);
app.use(router); // Use o router
app.mount('#app'); // Monte a aplicação na div com o id 'app'
