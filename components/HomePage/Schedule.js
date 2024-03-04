import React from "react";
import Image from "next/image";
import styles from "./Schedule.module.css";

function Schedule() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 style={{ color: "white" }}>Live Show</h2>
          <Image src={require("../../public/images/radioschedule.png")} />
        </div>
      </div>
    </div>
  );
}

export default Schedule;
