import React, { useState } from "react";
import styles from "./Program.module.css";
import PulsatingLock from "./PulsatingLock";

function Program() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className={styles.container}>
      <h2>Programme</h2>
      {!authenticated && <PulsatingLock />}
      {authenticated}
    </div>
  );
}

export default Program;
