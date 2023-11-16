/*
 * @Author: zhangyu
 * @Date: 2023-11-14 20:51:13
 * @LastEditTime: 2023-11-15 18:51:18
 */
export default {
    mysql: {
        db: {
            host: '10.100.139.212', // 连接地址
            port: 3306, // 端口
            user: 'worker', // 用户名
            password: 'rPY{D8vS@B#f)DZN', // 密码
            database: 'pff_sign', // 数据库名
            connectionLimit: 10, // 最大并发连接数
        }
    }
}