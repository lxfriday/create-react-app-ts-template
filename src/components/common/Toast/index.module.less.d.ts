declare namespace ToastModuleLessModule {
  export interface IToastModuleLess {
    container: string
    hide: string
    titleWrapper: string
  }
}

declare const ToastModuleLessModule: ToastModuleLessModule.IToastModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ToastModuleLessModule.IToastModuleLess
}

export = ToastModuleLessModule
