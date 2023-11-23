/*
 * @Author: zhangyu
 * @Date: 2023-10-18 10:49:20
 * @LastEditTime: 2023-11-23 11:45:51
 */
import { RouteType } from 'think-ts-lib'
import checkLogin from '../app/middleware/checkLogin'

export default (routes: RouteType) => {

    // 分组路由且挂载了路由中间件
    routes.group('/api/v1', (route: RouteType) => {
        route.get('/hello', 'hello/sayHello')
        route.post('/world', 'hello/sayWorld')
    }, checkLogin)

    // 视图演示
    routes.get('/', 'hello/showIndex')

}