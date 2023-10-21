import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import "primevue/resources/themes/lara-light-blue/theme.css";
import PrimeVue from 'primevue/config'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'

import Calendario from '@/views/Calendario.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Calendario', name: 'Calendario', component: Calendario }
  ]
})

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.mount('#app')
