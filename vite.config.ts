import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// build目录下需要打包的页面名称
const pageName = process.env.THINKTS_VUE_PAGE_NAME

export default defineConfig({
    plugins: [
        vue(),
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