/*
 * @Author: zhangyu
 * @Date: 2023-10-24 10:04:07
 * @LastEditTime: 2023-10-25 11:28:53
 */
import { Context, Controller } from 'think-ts-lib'

export default class HelloController extends Controller {
    async say(){
        return {
            body: `<!DOCTYPE html>
            <html>
              <head>
                <title>Vue 3 SSR Example</title>
              </head>
              <body>
                <div id="app">${await super.View('index.vue', {count: 1})}</div>
              </body>
            </html>`,
            status: 200
        }
    }
}