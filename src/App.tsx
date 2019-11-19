import React from 'react'
import { hot } from 'react-hot-loader/root'
import styles from 'src/App.module.less'

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>are i know ok</p>
      </header>
    </div>
  )
}

export default hot(App)
