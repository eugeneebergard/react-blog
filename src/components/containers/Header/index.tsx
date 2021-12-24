import React from 'react'
import styles from './Header.module.sass'
import { Link } from 'react-router-dom'
import { routes } from 'routes/routes'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link className="link" style={{ textDecoration: 'none' }} to={routes.home}>
        React-Blog
      </Link>
    </header>
  )
}

export default Header
