import React from 'react';
import styles from './Pages.module.css';
import NavBar from './NavigationBar';

function Home() {
  return (
    <>
      <NavBar />
      <h2 className={styles.title}>WELCOME!</h2>
      <p className={styles.paragraph}>   
          You have logged in successfully. Try using the Navigation Bar to view other pages.
      </p>
    </>
  );
}

export default Home;
