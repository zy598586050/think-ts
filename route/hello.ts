/*
 * @Author: zhangyu
 * @Date: 2023-10-18 10:49:20
 * @LastEditTime: 2024-01-05 10:32:38
 */
import { RouteType } from 'think-ts-lib'
import checkLogin from '../app/middleware/checkLogin'

export default (routes: RouteType) => {

    // 分组路由且挂载了路由中间件
    routes.group('/api/v1', (route: RouteType) => {
        route.get('/hello', 'hello/sayHello')
        route.post('/world', 'hello/sayWorld')
    }, checkLogin)

    // Vue视图演示
    routes.get('/vue', 'hello/showVueIndex')

    // React视图演示
    routes.get('/react', 'hello/showReactIndex')

    // Layui视图演示
    routes.get('/', 'hello/showLayuiIndex')
    
}