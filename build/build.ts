/*
 * @Author: zhangyu
 * @Date: 2023-12-28 13:59:15
 * @LastEditTime: 2023-12-28 14:25:34
 */

// 用于一键编译VueSSR的客户端同构代码
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const directoryPath = path.resolve(process.cwd(), 'build')

try {
    const files = fs.readdirSync(directoryPath, { withFileTypes: true })
    files.forEach(file => {
        if (file.isDirectory()) {
            execSync(`cross-env THINKTS_VUE_PAGE_NAME=${file.name} vite build`, { stdio: 'inherit' })
        }
    })
} catch (error) {
    console.log(error)
}