import React from 'react'
import dva from 'dva'
import { Router } from 'dva/router'
import { createHashHistory } from 'history'
// @ts-ignore
import createLogger from 'dva-logger'
// @ts-ignore
import createLoading from 'dva-loading'
import * as utils from 'src/utils'
import App from 'src/App'
import registerModels from 'src/models/registerModels'
import 'src/index.less'
import * as serviceWorker from 'src/serviceWorker'

const app = dva({
  onError(error: Error) {
    console.log('dva 顶层捕捉到错误了')
  },
})
registerModels(app)
app.use(createLoading())
if (utils.isDEV) {
  app.use(createLogger())
  console.log(process.env)
} else {
  window._a_i = process.env
}

app.router(() => {
  return (
    <Router history={createHashHistory()}>
      <App />
    </Router>
  )
})

// 启动应用
app.start('#root')

serviceWorker.unregister()
