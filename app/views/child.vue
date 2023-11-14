<!--
 * @Author: zhangyu
 * @Date: 2023-11-09 18:50:00
 * @LastEditTime: 2023-11-09 21:25:29
-->
<template>
    <div>
        <button @click="say">子组件</button>
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
            alert(111);
            console.log(123)
        }
    }
}
</script>