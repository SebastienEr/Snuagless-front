import React from "react";
import styles from "../HomePage/Poulpy.module.css";

const Poulpy = () => {
  return (
    <div className={styles.container}>
      <div className={styles.squid}>
        <div className={styles.shine}></div>
        <div className={styles.legs}></div>
      </div>
    </div>
  );
};

export default Poulpy;
