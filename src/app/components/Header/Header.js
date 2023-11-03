import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo_container}>
        <p>Logo</p>
      </div>
      <ul className={styles.header_nav_container}>
        <li className={styles.header_nav}>Home</li>
        <li className={styles.header_nav}>Couple</li>
        <li className={styles.header_nav}>Story</li>
        <li className={styles.header_nav}>Events</li>
        <li className={styles.header_nav}>Gallery</li>
      </ul>
      <div></div>
    </div>
  );
};
export default Header;
