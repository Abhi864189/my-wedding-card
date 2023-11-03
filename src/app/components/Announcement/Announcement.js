import React from "react";
import Image from "next/image";
import styles from "./Announcement.module.css";
const Announcement = () => {
  return (
    <div className="h-[52rem] w-[100%] relative">
      <Image src="/images/top-image.jpg" fill={true} />
      <div className={styles.announcement_heading_container}>
        <h2>Abhijit & Sudipta</h2>
        <div className={styles.announcement_heading_container_border} />
        <h3>We're getting married </h3>
        <div className={styles.announcement_heading_container_border} />
      </div>
      <div
        className={`${styles["announcement_heading_container_saveData"]}`}
      >
        <h2>Save the Date</h2>
        <h3>22 JAN 2024</h3>
      </div>
    </div>
  );
};
export default Announcement;
