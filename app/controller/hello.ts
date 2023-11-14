/*
 * @Author: zhangyu
 * @Date: 2023-10-24 10:04:07
 * @LastEditTime: 2023-11-14 18:45:46
 */
import { Context, Controller, ShowSuccess, GetParams, ApiException, View, Utils, M } from 'think-ts-lib'

export default class HelloController extends Controller {
  async say(ctx: Context) {
    //GetParams(ctx, true)
    // console.log(GetParams(ctx, true, ''))
    //ApiException()
    return ShowSuccess()
  }

  play(ctx: Context){
    GetParams(ctx, true)
    return ShowSuccess()
  }
}