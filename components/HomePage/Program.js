import React, { useState, useEffect } from "react";
import styles from "./Program.module.css";
import PulsatingLock from "./PulsatingLock";

function Program() {
  // https://api.radioking.io/widget/radio/radio-snuagless/track/next?limit=1
  // https://api.radioking.io/widget/radio/radio-snuagless/track/current
  //https://api.radioking.io/widget/radio/radio-snuagless/track/ckoi?limit=1

  const [previousTitle, setPreviousTitile] = useState(null);
  const [title, setTitle] = useState(null);
  const [nextTitle, setNextTitle] = useState(null);

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
  }, []);

  return (
    <div className={styles.container}>
      <h2>Programme</h2>

      <div>Prochain titre: {nextTitle}</div>
      <div>Titre en cours: {title}</div>
      <div>Titre précédent: {previousTitle}</div>
    </div>
  );
}

export default Program;
