import React from "react";
import styles from "../HomePage/Settings.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMessage,
  faOtter,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";

function Settings() {
  return (
    <div className={styles.settingsBox}>
      <div className={styles.bigCard}>
        {/* settings user */}
        <div className={styles.changePic}>
          {/* changer de photo de profil */}
        </div>
        <div className={styles.fieldCard}>
          {/* change username */}
          <h2>Username: </h2>
          <input
            type="field"
            placeholder="Username"
            className={styles.fields}
          ></input>
        </div>

        <div className={styles.fieldCard}>
          {/*change email */}
          <h2>Email: </h2>
          <input
            type="field"
            placeholder="Email"
            className={styles.fields}
          ></input>
        </div>
        <div className={styles.fieldCard}>
          {/* change password*/}
          <h2>Password: </h2>
          <input
            type="field"
            placeholder="Password"
            className={styles.fields}
          ></input>
          <input
            type="field"
            placeholder="Confirm password"
            className={styles.fields}
          ></input>
        </div>
      </div>

      <div className={styles.bigCard}>
        {/* settings preference */}
        <div className={styles.onOff}>
          {/* star on off */}
          <FontAwesomeIcon
            icon={faStar}
            style={{ width: "20px", marginTop: "25px", color: "white" }}
          />
          <text className={styles.settingsText}>
            Les étoiles me notifient quand ma musique passe. Les autres
            personnes qui ont les mêmes étoiles seront surement sur le tchat
            quand la musique passera!
          </text>
          <button type="radio" className={styles.buttonOnOff}>
            OFF/ON
          </button>
        </div>
        <div className={styles.onOff}>
          {" "}
          {/* tchat on off */}
          <FontAwesomeIcon
            icon={faMessage}
            style={{ width: "20px", marginTop: "25px", color: "white" }}
          />
          <text className={styles.settingsText}>
            Désactiver/activer la présence du tchat
          </text>
          <button type="radio" className={styles.buttonOnOff}>
            OFF/ON
          </button>
        </div>

        <div className={styles.onOff}>
          {" "}
          {/* mascottes on off */}
          <FontAwesomeIcon
            icon={faOtter}
            style={{ width: "20px", marginTop: "25px", color: "white" }}
          />
          <text className={styles.settingsText}>
            Désactiver/activer la présence de la mascotte
          </text>
          <button type="radio" className={styles.buttonOnOff}>
            OFF/ON
          </button>
        </div>
      </div>

      <div className={styles.separationLine}></div>
      <div className={styles.saveSettings}>
        <button className={styles.saveButton}>
          <FontAwesomeIcon
            icon={faFloppyDisk}
            style={{ width: "20px", marginTop: "25px", color: "white" }}
          />{" "}
          <text>Save changes</text>
        </button>{" "}
      </div>
    </div>
  );
}

export default Settings;
