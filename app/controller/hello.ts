/*
 * @Author: zhangyu
 * @Date: 2023-10-24 10:04:07
 * @LastEditTime: 2023-12-06 11:53:01
 */
import { Context, Controller, ShowSuccess, GetParams, View } from 'think-ts-lib'

export default class HelloController extends Controller {

  // 用于演示 GET接口功能
  sayHello(ctx: Context) {
    // 获取传参
    const params = super.GetParams(ctx)
    const result = [{
      title: 'ThinkTS',
      subtitle: '欢迎使用ThinkTS框架',
      doc: 'https://www.thinkts.cn',
      params
    }]
    return super.ShowSuccess(result)
  }

  // 用于演示 POST接口功能
  sayWorld(ctx: Context) {
    // 获取传参并校验参数
    const params = GetParams(ctx, true)
    const result = [{
      title: 'ThinkTS',
      subtitle: '欢迎使用ThinkTS框架',
      doc: 'https://www.thinkts.cn',
      params
    }]
    return ShowSuccess(result)
  }

  // 用于演示视图界面
  showIndex() {
    return View('index', {
      count: 9863763,
      title: 'ThinkTS',
      subtitle: '欢迎使用ThinkTS框架'
    })
  }
  
}