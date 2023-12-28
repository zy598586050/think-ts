/*
 * @Author: zhangyu
 * @Date: 2023-12-25 18:46:59
 * @LastEditTime: 2023-12-28 15:49:15
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

// build目录下需要打包的页面名称
const pageName = process.env.THINKTS_VUE_PAGE_NAME

export default defineConfig({
    plugins: [
        vue(),
        react(),
        copy({
            targets: [
                { src: 'dist/static/js/index.js', dest: 'public/js', rename: `${pageName}.js` },
                { src: 'dist/static/css/index.css', dest: 'public/css', rename: `${pageName}.css` }
            ],
            hook: 'writeBundle'
        })
    ],
    build: {
        rollupOptions: {
            input: `build/${pageName}/index.html`,
            output: {
                chunkFileNames: 'static/js/[name].js',
                entryFileNames: 'static/js/[name].js',
                assetFileNames: 'static/[ext]/[name].[ext]'
            }
        },
        copyPublicDir: false
    }
})