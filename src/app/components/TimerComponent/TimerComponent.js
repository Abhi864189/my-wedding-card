import React from "react";
import styles from "./TimerComponent.module.css";
import Image from "next/image";
const TimerComponent = () => {
  return (
    <div className={styles.timer_container}>
      <Image src="/images/timer-bg.jpg" height={400} width={900} />
    </div>
  );
};
export default TimerComponent;
