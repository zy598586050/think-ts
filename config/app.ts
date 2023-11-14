/*
 * @Author: zhangyu
 * @Date: 2023-11-13 21:07:21
 * @LastEditTime: 2023-11-14 20:15:51
 */
export default {
    app: {
        port: 5985, // 项目启动端口
        koaBody: {
            multipart: true // 支持multipart-formdate表单，可用于文件上传
        },
        enableLog: false, // 是否开启日志
        log_info_filename: 'logs/all-logs.log',
        log_error_filename: 'logs/log',
        log_error_pattern: 'yyy-MM-dd.log',
        route_path: 'route', // 默认路由文件目录地址
        controller_path: 'controller', // 默认控制器文件目录地址
        middleware_path: 'middleware', // 默认中间件文件目录地址
        view_path: 'views', // 默认视图目录地址
        static_path: 'public', // 默认静态资源目录地址
        validate_path: 'validate', // 默认验证器目录地址
        utils_path: 'utils', // 默认公共函数目录地址
        model_path: 'service', // 默认模型目录地址
        jwt_key: 'ThinkTS', // JWT加密的密钥
        expiresIn: 60 * 60, // JWT过期时间
    }
}