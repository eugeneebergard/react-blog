import React from 'react'
import styles from './Error.module.sass'
import { Link } from 'react-router-dom'
import { routes } from 'routes/routes'

const Error: React.FC = () => {
  return (
    <section className={styles.error}>
      <div>
        <h1 className={styles.title}>404 :(</h1>
        <p className={styles.subtitle}>Page not found</p>
        <p className={styles.subtitle}>Better 404 with back button than pie in the sky</p>
      </div>
      <Link className="btn link" to={routes.home}>
        Go to Home page
      </Link>
    </section>
  )
}

export default Error
