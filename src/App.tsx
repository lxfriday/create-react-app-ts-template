import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Demo from './pages/Demo'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/demo">
            <Demo />
          </Route>
          <Redirect from="*" to="/home"></Redirect>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default hot(App)
