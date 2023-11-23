/*
 * @Author: zhangyu
 * @Date: 2023-11-21 11:02:24
 * @LastEditTime: 2023-11-23 12:17:43
 */

// WebSocket开发
export default async (ctx: any, next: () => void) => {

    console.log('客户端已连接')

    ctx.websocket.on('message', (message: string) => {
        // 广播消息给客户端
        ctx.websocket.send(`接收消息并广播: ${message}`)
    })

    ctx.websocket.on('close', () => {
        console.log('断开连接')
    })

    await next()
}