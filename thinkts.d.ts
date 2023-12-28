/*
 * @Author: zhangyu
 * @Date: 2023-12-25 18:51:43
 * @LastEditTime: 2023-12-26 20:30:47
 */
declare module '@vitejs/plugin-vue'
declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}