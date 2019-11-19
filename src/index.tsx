import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.less'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()

if (!window.__DEV__) {
  window._a_i = process.env
}

console.log(process.env)
