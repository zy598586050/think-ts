/*
 * @Author: zhangyu
 * @Date: 2023-10-24 10:04:07
 * @LastEditTime: 2023-11-16 19:06:37
 */
import { Context, Controller, ShowSuccess, GetParams, ApiException, View, Utils, M, Db } from 'think-ts-lib'

export default class HelloController extends Controller {
  async say(ctx: Context) {
    //GetParams(ctx, true)
    // console.log(GetParams(ctx, true, ''))
    //ApiException()
    const result = await Db('test').delete({ isDelete: false, deleteTime: 'deleted_at' })
    return ShowSuccess(result)
  }

  play(ctx: Context){
    GetParams(ctx, true)
    return ShowSuccess()
  }
}