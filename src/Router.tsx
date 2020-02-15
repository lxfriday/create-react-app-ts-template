/**
 * 路由页面
 */
import React from 'react'
import { Switch, Route, Redirect } from 'dva/router'
import { usePrefetch } from 'src/utils'

const HomeFac = () => import('./pages/Home')
const DemoFac = () => import('./pages/Demo')
const CompsFac = () => import('./pages/Comps')

const AppRouter: React.FC = function() {
  const Home = usePrefetch(HomeFac)
  const Demo = usePrefetch(DemoFac)
  const Comps = usePrefetch(CompsFac)

  return (
    <Switch>
      <Route path="/home">{Home && <Home />}</Route>
      <Route path="/demo">{Demo && <Demo />}</Route>
      <Route path="/comps">{Comps && <Comps />}</Route>
      <Redirect from="*" to="/home"></Redirect>
    </Switch>
  )
}

export default AppRouter
