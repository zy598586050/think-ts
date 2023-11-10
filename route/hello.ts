/*
 * @Author: zhangyu
 * @Date: 2023-10-18 10:49:20
 * @LastEditTime: 2023-11-10 19:49:20
 */
import { RouteType, Context, ExceptionType } from 'think-ts-lib'

export default (route: RouteType) => {
    //route.post('/hello', 'hello/say')
    //route.get('/hello', 'sdf')
    route.group('api/v1', (routes: RouteType) => {
        routes.delete('hello', 'hello/say')
    })
}