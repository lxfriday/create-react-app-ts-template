declare namespace LoadingModuleLessModule {
  export interface ILoadingModuleLess {
    container: string
    noti: string
  }
}

declare const LoadingModuleLessModule: LoadingModuleLessModule.ILoadingModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: LoadingModuleLessModule.ILoadingModuleLess
}

export = LoadingModuleLessModule
