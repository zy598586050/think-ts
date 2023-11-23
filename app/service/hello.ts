/*
 * @Author: zhangyu
 * @Date: 2023-11-14 17:05:07
 * @LastEditTime: 2023-11-23 14:19:53
 */
import { Db } from 'think-ts-lib'

// 模型，数据处理层
export default class HelloModel {
    // 这里编写数据库处理逻辑给到控制器层
    getList() {
        return Db('user').where('age', '>', 8).select()
    }
}