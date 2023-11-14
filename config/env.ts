/*
 * @Author: zhangyu
 * @Date: 2023-10-17 14:31:56
 * @LastEditTime: 2023-11-14 20:12:40
 */

// 基于PM2启动的配置文件
export default {
    apps: [
        {
            name: 'think-ts',
            script: '../dist/index.js',
            watch: false,
            ignore_watch: ['node_modules'],
            exec_mode: 'cluster',
            instances: 2,// 通常服务器CPU是几核就填几
            env: {
                NODE_ENV: 'production',
            },
            env_test: {
                NODE_ENV: 'test'
            }
        }
    ]
}