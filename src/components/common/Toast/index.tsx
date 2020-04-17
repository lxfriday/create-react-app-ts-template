import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import styles from './index.module.less'

interface Props {
  /**
   * Toast 显示的内容
   */
  title: string
  /**
   * Toast 停留的时间
   */
  timeout?: number
}

let timer: NodeJS.Timeout

function useVisible(timeout: number) {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    timer = setTimeout(() => {
      setVisible(false)
    }, timeout)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return { visible, setVisible }
}

const Toast: React.FC<Props> = function(props) {
  const { visible, setVisible } = useVisible(props.timeout || 1500)
  return (
    <div className={classnames(styles.container, !visible && styles.hide)} onClick={() => setVisible(false)}>
      <div className={styles.titleWrapper}>{props.title}</div>
    </div>
  )
}

export function showToast({ title, timeout }: Props) {
  const div = document.createElement('div')
  const body = document.querySelector('#root')
  // @ts-ignore
  body.appendChild(div)
  ReactDOM.render(<Toast title={title} timeout={timeout} />, div)
}

// 参考 https://zhuanlan.zhihu.com/p/35227004
