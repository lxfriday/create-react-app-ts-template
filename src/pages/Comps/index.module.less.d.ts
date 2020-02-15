declare namespace IndexModuleLessModule {
  export interface IIndexModuleLess {
    container: string
  }
}

declare const IndexModuleLessModule: IndexModuleLessModule.IIndexModuleLess & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexModuleLessModule.IIndexModuleLess
}

export = IndexModuleLessModule
