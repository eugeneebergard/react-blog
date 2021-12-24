import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from 'routes/routes'
import ReactLogo from 'components/ui/ReactLogo'

const Home: React.FC = () => {
  return (
    <section className="home">
      <ReactLogo />
      <h2>
        <Link to={routes.posts} className="link">
          Let's go check posts!
        </Link>
      </h2>
    </section>
  )
}

export default Home
