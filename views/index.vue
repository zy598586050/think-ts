<!--
 * @Author: zhangyu
 * @Date: 2023-10-28 15:11:14
 * @LastEditTime: 2023-11-09 20:53:37
-->
<template>
    <div>
        <div class="index" @click="count++">{{ count }}</div>
        <Index /> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1
        }
    },
    methods: {
        say() {
            console.log(1111)
        }
    },
    created() {
        console.log(this.count)
    },
    components: {
        Index: 'child.vue'
    }
}
</script>

<style>
.index {
    color: red;
}
</style>