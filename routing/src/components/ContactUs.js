import React from 'react';
import styles from './Pages.module.css';
import NavBar from './NavigationBar';

function ContactUs() {
  return (
    <>
      <NavBar />
      <h2 className={styles.title}>Contact Us</h2>
      <p className={styles.paragraph}>   
          <b>WEBSITE:</b> www.dota2.com
      </p>
      <p className={styles.paragraph}>   
          <b>EMAIL:</b> info@dota2.comm
      </p>
      <p className={styles.paragraph}>   
          <b>ADDRESS:</b> Bellevue, Washington, United States
      </p>
    </>
  );
}

export default ContactUs;
