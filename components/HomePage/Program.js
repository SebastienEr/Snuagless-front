import React from "react";
import Image from "next/image";
import styles from "./Program.module.css";

function Program() {
  return (
    <div className={styles.container}>
      <h2>Programme</h2>
      <Image src={require("../../public/images/lock.png")} />
    </div>
  );
}

export default Program;
