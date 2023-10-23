/*
 * @Author: zhangyu
 * @Date: 2023-10-18 10:49:20
 * @LastEditTime: 2023-10-21 19:47:29
 */
import { RouteType } from 'think-ts-lib'

export default (route: RouteType) => {
    route.get('/b', 'sdf')
}