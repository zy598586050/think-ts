/*
 * @Author: zhangyu
 * @Date: 2023-11-23 11:34:54
 * @LastEditTime: 2023-11-23 11:46:37
 */
import { Context, ExceptionType, Utils } from 'think-ts-lib'

// Token校验的中间件
export default (ctx: Context, next: () => void, error: ExceptionType) => {
    const token = ctx?.header?.authorization?.split('Bearer ')?.[1] || ''
    if (Utils.validateToken(token)) {
        next()
    } else {
        error('非法请求或Token过期')
    }
}