/*
 * @Author: zhangyu
 * @Date: 2023-10-18 10:49:20
 * @LastEditTime: 2023-10-24 10:58:34
 */
import { RouteType } from 'think-ts-lib'

export default (route: RouteType) => {
    route.get('/hello', '/a/hello/say')
    //route.get('/hello', 'sdf')
}