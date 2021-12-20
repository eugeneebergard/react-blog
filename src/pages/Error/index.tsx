import React from 'react';
import styles from './Error.module.scss';
import { Link } from 'react-router-dom';
import { routes } from 'routes/routes';

const Error: React.FC = () => {
  return (
    <section className={styles.error}>
      <div>
        <h1 className={styles.title}>404 :(</h1>
        <p className={styles.subtitle}>Страница не найдена</p>
        <p className={styles.subtitle}>Лучше 404 с кнопкой «Назад», чем журавль в небе</p>
      </div>
      <Link className={styles.link} to={routes.home}>Перейти на главную</Link>
    </section>
  );
}

export default Error;
