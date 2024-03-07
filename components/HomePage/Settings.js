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
      <div className={styles.topCard}>
        {/* settings user */}
        <div className={styles.changePic}>
          {/* changer de photo de profil */}
        </div>
        <div className={styles.fieldCardTop}>
          {/* change username */}
          <text>Username: </text>
          <input
            type="field"
            placeholder="Username"
            className={styles.fields}
          ></input>
        </div>

        <div className={styles.fieldCardTop}>
          {/*change email */}
          <text>Email: </text>
          <input
            type="field"
            placeholder="Email"
            className={styles.fields}
          ></input>
        </div>
        <div className={styles.fieldCardTop}>
          {/* change password*/}
          <text>Password: </text>
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

      <div className={styles.bottomCard}>
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

        <div className={styles.separationLine}></div>
      </div>

      <div className={styles.saveSettings}>
        <span className={styles.icon}>
          <FontAwesomeIcon
            icon={faFloppyDisk}
            style={{ width: "20px", color: "white" }}
          />
        </span>
        <span className={styles.text}>Save</span>
      </div>
    </div>
  );
}

export default Settings;
