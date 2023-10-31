import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_logo_container}>
        <p>Logo</p>
      </div>
      <ul className={styles.header_nav_container}>
        <li>Home</li>
        <li>Couple</li>
        <li>Story</li>
        <li>Events</li>
        <li>Gallery</li>
      </ul>
      <div></div>
    </div>
  );
};
export default Header;
