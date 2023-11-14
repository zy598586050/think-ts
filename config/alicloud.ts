/*
 * @Author: zhangyu
 * @Date: 2023-11-14 20:39:24
 * @LastEditTime: 2023-11-14 20:50:35
 */
import fs from 'fs'

export default {
    // 阿里云其他服务相关配置
    alicloud: {
        accessKeyId: '',
        secretAccessKey: '',
        bucket: '', // 存储空间
        region: '', // 空间所在大区
    },
    // 支付宝相关配置
    alipay: {
        appId: '',
        privateKey: fs.readFileSync('cert/ali_private_key.pem', 'utf8'),
        encryptKey: '',
        alipayRootCertPath: '',
        alipayPublicCertPath: '',
        appCertPath: ''
    }
}