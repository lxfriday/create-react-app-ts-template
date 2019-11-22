import React, { ReactElement } from 'react'
import styles from './index.module.less'

interface Props {}

export default function index({}: Props): ReactElement {
  return <div className={styles.container}>home</div>
}
