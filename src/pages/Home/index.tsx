import React, { ReactElement } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import GAHoc from 'src/components/common/GAHoc'
import styles from './index.module.less'

interface Props {}

function Home(props: Props & RouteComponentProps): ReactElement {
  return (
    <div className={styles.container}>
      <h1>this is home</h1>
      <button onClick={() => props.history.push('/demo')}>to demo</button>
    </div>
  )
}

export default GAHoc({ title: 'home页面' })(withRouter(Home))
