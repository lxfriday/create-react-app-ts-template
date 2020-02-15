# TS h5 脚手架

## 优点

- 自动注入 `amfe-flexible`
- .env 配置页面的参数
- `thread-loader` `hard-source-webpack-plugin` 加速构建 _飞快_
- 添加了针对 `less` 的 css modules
- 内置了微信分享的模板
- 内置了 UZI 模板
- 内置了 GA 模板
- 内置了 Sentry 模板

## env

- `BROWSER=NONE` 不默认启动浏览器
- `H5=TRUE` 是 h5 项目，开启 `px2rem` 和 `amfe-flexible`
- `REACT_APP_VERSION=1.0.1` 应用版本
- `REACT_APP_TITLE=TS 项目 Demo` html title
- `REACT_APP_DESC=我是描述 1,我是描述 2` html description
- `REACT_APP_USE_WECHAT_SHARE` 启用微信分享
- `USE_GA` 启用 GA
- `USE_UZI` 启用 UZI
- `UZI_APPID` UZI appid
- `REACT_APP_USE_SENTRY` 启用 sentry
- `REACT_APP_SENRTY_SRC` sentry 依赖地址
- `REACT_APP_SENRTY_CONFIG_LINK` sentry 配置地址

带有 `REACT_APP` 可以在单页应用中获取到

## 使用指南

**开发阶段**

1. `rm -rf .git/ && git init`
1. 更改 `package.json` 文件中 `name` 和项目的文件夹为你的项目名
1. 更改 `.env` 文件中下面的变量
   1. `REACT_APP_VERSION` 任意，app 版本
   2. `REACT_APP_TITLE` 任意，页面的默认标题
   3. `REACT_APP_DESC` 任意，html meta=description 字段
   4. `REACT_APP_USE_WECHAT_SHARE` `TRUE` 或删除，是否启用微信分享
   5. `USE_GA` `TRUE` 或者删除，是否注入默认 GA 代码 [https://wiki.n.miui.com/pages/viewpage.action?pageId=218084350 前往查看规则](https://wiki.n.miui.com/pages/viewpage.action?pageId=218084350)
   6. `USE_UZI` `TRUE` 或者不填，启用 UZI 统计，启用的话，填写 `UZI_APPID`
   7. `UZI_APPID` 数字或者删除，uzi 的 appid [http://uzi.ai.srv/index.html#/appid 前往创建](http://uzi.ai.srv/index.html#/appid)
   8. `USE_SENTRY` `TRUE` 或者不填，启用 sentry 统计，启用的话，填写 `REACT_APP_SENRTY_SRC` 和 `REACT_APP_SENRTY_CONFIG_LINK`
   9. `REACT_APP_SENRTY_SRC` 字符串，sentry 依赖的地址。 默认是 `https://cdn.ravenjs.com/3.26.2/raven.min.js` 不用改
   10. `REACT_APP_SENRTY_CONFIG_LINK` [https://sentry.micloud.d.xiaomi.net/organizations/sentry/projects/new/ 前往创建](https://sentry.micloud.d.xiaomi.net/organizations/sentry/projects/new/)
1. 开始开发

**发布阶段**

1. 更改 `.env.production` `PUBLIC_URL=xx` 为你的托管目录，如果是根目录则不用管
1. 更改 `package.json` 中的 `script.goku` 目标地址为你的项目地址
