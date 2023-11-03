import React from "react";
import styles from "./Introduction.module.css";
import Image from "next/image";
const Introduction = () => {
  return (
    <div className={styles.introduction_container}>
      <div className={styles.introduction_container_sub_container}>
        <div className={styles.groom_container}>
          <div className={styles.introduction_image}>
            <Image src="/images/groom.webp" height={400} width={900} />
          </div>
          <div className={styles.introduction_description_groom}>
            <h2>The Groom</h2>
            <p>
              Hi I am suntina , dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <h3>- Suntina</h3>
          </div>
        </div>
        <div className={styles.bride_container}>
          <div className={styles.introduction_description_bride}>
            <h2>The Bride</h2>
            <p>
              Hi I am suntina , dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <h3>Famico-</h3>
          </div>
          <div className={styles.introduction_image}>
            <Image src="/images/demo-bride.webp" height={200} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
