import React, { FC, useState } from 'react'
import { connect } from 'dva'
import { RouteComponentProps, withRouter } from 'dva/router'
import GAHoc from 'src/components/common/GAHoc'
import { showDownloadModal } from 'src/components/common/DownloadModal'
import WechatOverlay from 'src/components/common/WechatOverlay'

import styles from './index.module.less'

type PageStateProps = {
  app: {
    list: any[]
  }
}

type Props = {}

type IProps = Props & RouteComponentProps & PageStateProps

const Comps: FC<IProps> = function(props) {
  const [showWeChatOverlay, setShowWeChatOverlay] = useState(false)
  console.log(props.app)
  return (
    <div className={styles.container}>
      <h1>this is comps</h1>
      <WechatOverlay visible={showWeChatOverlay} onClose={() => setShowWeChatOverlay(false)}></WechatOverlay>
      <button onClick={() => props.history.push('/home')}>to home</button>
      <button onClick={showDownloadModal}>show download modal</button>
      <button onClick={() => setShowWeChatOverlay(true)}>show wechat overlay</button>
    </div>
  )
}

export default GAHoc({ title: 'Comps 页面' })(
  withRouter(
    connect(({ app }: PageStateProps) => {
      return { app }
    })(Comps)
  )
)
