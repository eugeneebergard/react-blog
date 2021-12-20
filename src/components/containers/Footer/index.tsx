import React from "react";
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a className="link" href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer">
        JSON Placeholder
      </a>
    </footer>
  );
}

export default Footer;
