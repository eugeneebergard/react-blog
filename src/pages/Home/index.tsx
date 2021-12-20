import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes/routes';

const Home: React.FC = () => {
  return (
    <section className="home">
      <h1>Home Page</h1>
      <h2>
        <Link to={ routes.posts } className="link">Let's go check posts!</Link>
      </h2>
    </section>
  );
}

export default Home;
