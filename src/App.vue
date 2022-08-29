<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {io} from "socket.io-client";
import {ref} from "vue";
import type {User} from "../types";

const users = ref<User[]>([]);

const socket = io('http://localhost:3000/ws', {withCredentials: true})

socket.on('hello', (arg) => {
    console.log(arg)
})

socket.on('new user', (user: Omit<User, 'id'>) => {
    let max_id: number = 0;
    users.value.forEach(u => {
        max_id = Math.max(max_id, u.id)
    })
    const u: User = {
        id: max_id + 1,
        name: user.name,
        age: user.age
    };
    users.value.push(u)
})
socket.emit('howdy', "stranger")
</script>

<template lang="pug">
HelloWorld(msg="Vite + Vue + Express + Socket.io" v-cloak)
</template>

<style scoped lang="less">
.button {
    user-select: none;
    -webkit-user-drag: none;
    border-radius: 4px;
    border: 1px solid grey;
    padding: 4px;

    &:hover {
        background-color: lightgreen;
        border-color: green;
        color: green;
    }

    &:active {
        position: relative;
        top: 1px;
        color: red;
    }
}
</style>
