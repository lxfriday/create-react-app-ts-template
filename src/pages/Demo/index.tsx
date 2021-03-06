import React, { ReactElement } from 'react'
import { withRouter, RouteComponentProps } from 'dva/router'
import GAHoc from 'src/components/common/GAHoc'

import styles from './index.module.less'

interface Props {}

function Demo(props: Props & RouteComponentProps): ReactElement {
  return (
    <div className={styles.container}>
      <h1>this is demo</h1>
      <button onClick={() => props.history.push('/comps')}>to comps</button>
    </div>
  )
}

export default GAHoc({ title: 'demo页面', link: 'abc.xyz' })(withRouter(Demo))
