/*
 * @Author: zhangyu
 * @Date: 2023-10-24 10:04:07
 * @LastEditTime: 2023-11-09 18:45:39
 */
import { Context, Controller, View } from 'think-ts-lib'

export default class HelloController extends Controller {
  async say() {
    // return View('/index', {count: 1})
    return View('index.vue', { count: 1 })
  }
}