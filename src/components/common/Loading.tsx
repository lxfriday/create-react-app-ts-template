import React, { ReactElement } from 'react'
import styles from './Loading.module.less'

interface Props {}

export default function Loading({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <span className={styles.noti}>loading...</span>
    </div>
  )
}
