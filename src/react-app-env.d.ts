/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly H5: string
    readonly PUBLIC_URL: string
    readonly UZI_APPID: string
    readonly REACT_APP_VERSION: string
    readonly REACT_APP_TITLE: string
    readonly REACT_APP_DESC: string
    readonly REACT_APP_SUBMIT_URL: string
    // sentry 依赖文件的地址
    readonly REACT_APP_SENRTY_SRC: string
    // sentry config 地址
    readonly REACT_APP_SENRTY_CONFIG_LINK: string
    readonly REACT_APP_USE_WECHAT_SHARE: string
    readonly USE_GA: string
  }
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>

  const src: string
  export default src
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

interface Window {
  _a_i: NodeJS.ProcessEnv
  reportGA: (age_title: string, page_path: string) => void
  reportUserBehavior: (behavior: string) => void
  wx: any
  Raven: any
  xiaoai: any
  app: any
  webkit: any
  postData: any
  onShareResult: Function
  startActivity: Function
  userCurrentCity: any // 打点需要
}
