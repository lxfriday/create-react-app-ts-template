import React from 'react'
import classnames from 'classnames'
import styles from './index.module.less'

interface IAppProps {
  title?: string
  visible: boolean
  onClose(): void
}

const WechatOverlay: React.FC<IAppProps> = ({ title, visible, onClose }) => {
  return (
    <div className={classnames(styles.container, !visible && styles.hide)} onClick={onClose}>
      <div className={styles.bubbleWrapper}>
        <div>{title}</div>
      </div>
    </div>
  )
}

WechatOverlay.defaultProps = {
  title: '请用浏览器打开',
}

export default WechatOverlay
