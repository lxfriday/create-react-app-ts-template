declare namespace AppModuleLessModule {
  export interface IAppModuleLess {
    App: string
    AppHeader: string
  }
}

declare const AppModuleLessModule: AppModuleLessModule.IAppModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppModuleLessModule.IAppModuleLess
}

export = AppModuleLessModule
