declare namespace IndexModuleLessModule {
  export interface IIndexModuleLess {
    button: string
    buttonWrapper: string
    container: string
    hide: string
    logo: string
    modalWrapper: string
    name: string
    noti: string
  }
}

declare const IndexModuleLessModule: IndexModuleLessModule.IIndexModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexModuleLessModule.IIndexModuleLess
}

export = IndexModuleLessModule
