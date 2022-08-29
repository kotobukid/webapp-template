"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const vue_1 = require("vue");
require("./style.css");
const App_vue_1 = __importDefault(require("./App.vue"));
const pinia_1 = require("pinia");
(0, vue_1.createApp)(App_vue_1.default).use((0, pinia_1.createPinia)()).mount('#app');
axios_1.default.get('/api/v1/users.json').then((res) => {
    console.log(res.data.users);
});
