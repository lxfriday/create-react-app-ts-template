import React, { FC } from 'react'
import { connect } from 'dva'
import { RouteComponentProps, withRouter } from 'dva/router'
import GAHoc from 'src/components/common/GAHoc'

import styles from './index.module.less'

type PageStateProps = {
  app: {
    list: any[]
  }
}

type Props = {}

type IProps = Props & RouteComponentProps & PageStateProps

const List: FC<IProps> = function(props) {
  console.log(props.app)
  return (
    <div className={styles.container}>
      <h1>this is list</h1>
      <button onClick={() => props.history.push('/home')}>to home</button>
    </div>
  )
}

export default GAHoc({ title: 'list页面' })(
  withRouter(
    connect(({ app }: PageStateProps) => {
      return { app }
    })(List)
  )
)
