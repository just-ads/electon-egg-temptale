# electron-egg-template

## 目录结构
```
project
├── bulid 打包用的资源和脚本
    ├── icons 软件图标（打包用到）
    ├── extraResources 额外资源目录
├── electron 主进程服务
    ├── addon 插件目录
    ├── config 配置文件
        ├── bin.js 开发环境配置
        ├── config.default.js 默认配置，都会加载
        ├── config.local.js dev环境加载
        ├── config.prod.js 生产环境加载
        ├── encrypt.js 加密配置文件
        ├── builder.json 打包配置
    ├── controller 控制器
    ├── service 业务层
    ├── preload 预加载，在程序启动时加载，如托盘、自动升级等功能要提前加载代码
    ├── jobs 任务
├── frontend 前端目录
├── out 打包后生成的可执行文件
    ├── latest.yml 自动升级文件
    ├── xxx.exe window应用安装包
    ├── xxx.exe.blockmap window应用增量升级包
    ├── xxx.dmg mac应用安装包
    ├── xxx.deb linux应用安装包后缀有多种  
├── logs 日志 
├── public 资源目录
    ├── dist 前端资源会移动到这里，生产环境加载
    ├── electron 业务js加密后的文件
    ├── html 一些模板
    ├── images 一些图片
```

### 常见问题
安装`electron`超时
设置node环境变量

Windows PowerShell
```shell
$env:ELECTRON_GET_USE_PROXY=1
# node.js > 10
# 设置代理地址
$env:GLOBAL_AGENT_HTTP_PROXY="http://127.0.0.1:7890"
```
打包时下载electron文件失败
```shell
# 设置其它源
npm config set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
```
