import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import IMG_xiaoai_logo from 'src/assets/imgs/xiaoai_logo.png'
import { goToDownload } from 'src/utils'
import styles from './index.module.less'

interface IAppProps {}

const DownloadModal: React.FC<IAppProps> = () => {
  const [visible, setVisible] = useState(true)
  return (
    <div className={classnames(styles.container, !visible && styles.hide)} onClick={() => setVisible(false)}>
      <div className={styles.modalWrapper}>
        <img className={styles.logo} src={IMG_xiaoai_logo} alt="" />
        <span className={styles.name}>小爱同学</span>
        <span className={styles.noti}>请下载安装最新版小爱同学</span>
        <div className={styles.buttonWrapper}>
          <div
            className={styles.button}
            onClick={e => {
              e.stopPropagation()
              goToDownload()
            }}
          >
            <span>下载</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function showDownloadModal() {
  const div = document.createElement('div')
  const container = document.getElementById('root')
  // @ts-ignore
  container.appendChild(div)
  ReactDOM.render(<DownloadModal />, div)
}

export { showDownloadModal }
export default DownloadModal
