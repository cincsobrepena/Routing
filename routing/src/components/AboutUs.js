import React from 'react';
import styles from './Pages.module.css';
import NavBar from './NavigationBar';

function AboutUs() {
  return (
    <>
      <NavBar />
      <h2 className={styles.title}>DOTA 2</h2>
      <p className={styles.paragraph}>   
          Dota 2 is a complex multiplayer online battle arena (MOBA) game by Valve Corporation. Two teams of five players each choose from a roster of over a hundred heroes, each with unique abilities and roles. The goal is to destroy the enemy’s Ancient, a structure located in their base, by navigating the map, engaging in combat, and working strategically as a team.
      </p>

      <p className={styles.paragraph}>
          Renowned for its depth, Dota 2 demands individual skill and team coordination. Players gain experience and gold to level up abilities and buy items, creating dynamic interactions and evolving gameplay. The vibrant esports scene, with global tournaments and events, adds to its appeal, making Dota 2 a standout title in online gaming.
      </p>

      <button className={styles.button}>PLAY NOW!</button>
    </>
  );
}

export default AboutUs;
