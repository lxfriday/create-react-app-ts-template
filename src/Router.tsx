/**
 * 路由页面
 */
import React, { lazy } from 'react'
import { Switch, Route, Redirect } from 'dva/router'

const Home = lazy(() => import('./pages/Home'))
const Demo = lazy(() => import('./pages/Demo'))
const List = lazy(() => import('./pages/List'))

const AppRouter: React.FC = function() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/demo">
        <Demo />
      </Route>
      <Route path="/list">
        <List />
      </Route>
      <Redirect from="*" to="/home"></Redirect>
    </Switch>
  )
}

export default AppRouter
