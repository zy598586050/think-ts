/*
 * @Author: zhangyu
 * @Date: 2023-10-24 10:04:07
 * @LastEditTime: 2023-11-10 17:06:00
 */
import { Context, Controller, ShowSuccess, GetParams } from 'think-ts-lib'

export default class HelloController extends Controller {
  say(ctx: Context) {
    GetParams(ctx, true)
    return ShowSuccess([])
  }
}