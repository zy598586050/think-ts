/*
 * @Author: zhangyu
 * @Date: 2023-11-10 16:50:15
 * @LastEditTime: 2023-12-05 09:50:01
 */

// 验证器
export default {
    // 验证规则
    rule: {
        email: 'email',
        password: 'require'
    },
    // 自定义验证消息提示
    message: {
        email: '请正确填写邮箱'
    },
    // 按场景划分校验参数
    scene: {
        sayWorld: ['email', 'password']
    }
}