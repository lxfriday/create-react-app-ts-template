import React, { ReactElement, useEffect } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import styles from './index.module.less'

interface Props {}

// ga 上报
function useReportGA() {
  useEffect(() => {
    const { origin, pathname } = window.location
    window['reportGA']('感恩信首页', `${origin}${pathname}#/home`)
  }, [])
}

function Home(props: Props & RouteComponentProps): ReactElement {
  useReportGA()
  return (
    <div className={styles.container}>
      <h1>this is home</h1>
      <button onClick={() => props.history.push('/demo')}>to demo</button>
    </div>
  )
}

export default withRouter(Home)
