/*
 * @Author: zhangyu
 * @Date: 2023-11-14 20:24:42
 * @LastEditTime: 2023-11-14 20:38:42
 */
import fs from 'fs'

export default {
    // 公众号
    wechat: {
        appid: '',
        secret: ''
    },
    // 小程序
    miniProgram: {
        appid: '',
        secret: ''
    },
    // 微信支付
    wxpay: {
        mchid: '', // 商户号
        serial_no: '', // 证书序列号
        apiv3_private_key: '', // API密钥
        public_key: fs.readFileSync('cert/wx_public_key.pem', 'utf8'), // 公钥
        private_key: fs.readFileSync('cert/wx_private_key.pem', 'utf8'), // 私钥
        notify_url: '', // 回调地址
    }
}