/*
 * @Author: zhangyu
 * @Date: 2023-10-18 10:49:20
 * @LastEditTime: 2023-10-22 13:38:46
 */
import { RouteType } from 'think-ts-lib'

export default (route: RouteType) => {
    route.get('/hello', 'a/')
    //route.get('/hello', 'sdf')
}