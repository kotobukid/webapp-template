<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
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
