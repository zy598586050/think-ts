<template>
    <div class="page">
        <div class="expression">:)</div>
        <h1>{{ ssrData.title }}</h1>
        <h2>{{ ssrData.subtitle }}</h2>
        <div class="linkBox">
            <a href="https://www.thinkts.com">完全开发手册</a>
            <a href="https://github.com/zy598586050/think-ts-lib">GitHub源码</a>
            <a @click="clickLike">点击喜欢：{{ localCount }}</a>
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Footer from './footer.vue'

const props = defineProps(['ssrData'])
const localCount = ref(props.ssrData.count)

const clickLike = () => {
    localCount.value++
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
}
</style>

<style lang="scss">
.page {
    padding: 24px 48px;

    .expression {
        font-size: 100px;
        font-weight: normal;
    }

    h1 {
        font-size: 42px;
        margin-top: 12px;
    }

    h2 {
        font-size: 30px;
        margin-top: 12px;
    }

    .linkBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 20px;
    }

    a {
        color: #2E5CD5;
        text-decoration: none;
        margin-right: 15px;
        font-size: 18px;
    }

    a:hover {
        cursor: pointer;
        text-decoration: underline;
    }
}
</style>