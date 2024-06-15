import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavBar = () => {
  return (
    <>
        <h1 className={styles.navTitle}>DOTA 2</h1>
        <nav>
        <ul>
            <li className={styles.item}>
            <Link className={styles.link} to="/home">Home</Link>
            </li>
            <li className={styles.item}>
            <Link className={styles.link} to="/about">About Us</Link>
            </li>
            <li className={styles.item}>
            <Link className={styles.link} to="/contact">Contact Us</Link>
            </li>
        </ul>
        </nav>
    </>
  );
};

export default NavBar;