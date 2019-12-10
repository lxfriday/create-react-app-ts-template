import React from 'react'
import ReactDOM from 'react-dom'
import * as utils from 'src/utils'

import App from './App'
import './index.less'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()

if (utils.isDEV) {
  console.log(process.env)
} else {
  window._a_i = process.env
}
