import React from 'react'
import styles from './ReactLogo.module.scss'

const ReactLogo: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.reactLogo}>
        <span className={styles.nucleo} />
      </span>
    </div>
  )
}

export default ReactLogo
