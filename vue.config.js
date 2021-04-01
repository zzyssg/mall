// 导出一个object对象
module.exports = {
    // 必须叫devServer，会加载devServer的配置表
    devServer:{
        host:'localhost',
        // 项目启动的端口号
        port: 8080,
        proxy:{
            // 拦截
            '/activity':{
                // 目标地址
                target:"https://www.imooc.com",
                changeOrigin:false
            }
        }
    }
}