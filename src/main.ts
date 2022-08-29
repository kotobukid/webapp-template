import axios, {AxiosResponse} from 'axios';
import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import {createPinia} from "pinia";
import type {User} from "../types";

createApp(App).use(createPinia()).mount('#app');

axios.get('/api/v1/users.json').then((res: AxiosResponse<{ users: User[] }>) => {
    console.log(res.data.users);
})
