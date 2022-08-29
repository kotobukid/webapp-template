import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import type {Type1} from "../types";

const t1: Type1 = {name: 'helo'}

createApp(App).use(createPinia()).mount('#app');


