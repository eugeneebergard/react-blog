import React from "react";
import styles from './Footer.module.sass';
import jestLogo from 'static/images/jest.svg'
import reactLogo from 'static/images/react.svg'
import typescriptLogo from 'static/images/typescript.svg'
import sassLogo from 'static/images/sass.svg'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <a className="link" href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer">
            JSON Placeholder
        </a>
        <div>
            <a href="https://ru.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
                <img className={styles.logo} src={reactLogo} alt="react-logo" />
            </a>
            <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noreferrer">
                <img className={styles.logo} src={typescriptLogo} alt="ts-logo" />
            </a>
            <a href="https://jestjs.io/ru/docs/getting-started" target="_blank" rel="noreferrer">
                <img className={styles.logo} src={jestLogo} alt="jest-logo" />
            </a>
            <a href="https://sass-scss.ru/" target="_blank" rel="noreferrer">
                <img className={styles.logo} src={sassLogo} alt="sass-logo" />
            </a>
        </div>
    </footer>
  );
}

export default Footer;
