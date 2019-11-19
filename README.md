# TS h5 脚手架

## 优点

- 自动注入 `amfe-flexible`
- .env 配置页面的参数
- `thread-loader` `hard-source-webpack-plugin` 加速构建 _飞快_
- 添加了针对 `less` 的 css modules
- 添加了 `purgecss-webpack-plugin` 对 CSS 进行 tree shaking

## env

- BROWSER=NONE # 不默认启动浏览器
- H5=TRUE # 是 h5 项目，开启 `px2rem` 和 `amfe-flexible`
- REACT_APP_VERSION=1.0.1 # 应用版本
- REACT_APP_TITLE=TS 项目 Demo # html title
- REACT_APP_DESC=我是描述 1,我是描述 2 // html description

带有 `REACT_APP` 可以在单页应用中获取到

## 使用指南

1. `rm -rf .git/ && git init`
1. 更改 `package.json` `name` 为你的项目名
1. 更改 `.env` `REACT_APP_VERSION` `REACT_APP_TITLE` `REACT_APP_DESC`
1. 更改 `.env.production` `PUBLIC_URL=xx` 为你的托管目录，如果是更目录则不用管
1. 开始开发
