import React from 'react'
import styles from './Loader.module.sass'

const Loader: React.FC = () => {
  return (
    <div data-testid="loader" style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
      <div className={styles.ldsEllipsis}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
