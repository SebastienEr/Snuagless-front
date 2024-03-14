import React, { useState, useEffect } from "react";
import styles from "./Program.module.css";
import PulsatingLock from "./PulsatingLock";

function Program() {
  // https://api.radioking.io/widget/radio/radio-snuagless/track/next?limit=1
  // https://api.radioking.io/widget/radio/radio-snuagless/track/current
  //https://api.radioking.io/widget/radio/radio-snuagless/track/ckoi?limit=1

  const [previousTitle, setPreviousTitile] = useState([]);
  const [title, setTitle] = useState([]);
  const [nextTitle, setNextTitle] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.radioking.io/widget/radio/radio-snuagless/track/next?limit=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("NEXT-TITLE", data);
        setNextTitle(data[0].title);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });

    fetch("https://api.radioking.io/widget/radio/radio-snuagless/track/current")
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });

    fetch(
      "https://api.radioking.io/widget/radio/radio-snuagless/track/ckoi?limit=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setPreviousTitile(data[0].title);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, [previousTitle]);

  return (
    <div className={styles.container}>
      <h2>Programme</h2>

      <div className={styles.diffusion}>
        <div className={styles.text}>
          <text>Prochain titre: </text>
        </div>
        <div className={styles.title}>{nextTitle}</div>
      </div>
      <div className={styles.diffusion}>
        <div className={styles.text}>
          <text>Titre en cours: </text>
        </div>{" "}
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.diffusion}>
        <div className={styles.text}>
          <text>Titre précédent: </text>
        </div>{" "}
        <div className={styles.title}>{previousTitle}</div>
      </div>
    </div>
  );
}

export default Program;
