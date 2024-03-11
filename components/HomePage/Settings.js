import React from "react";
import styles from "../HomePage/Settings.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMessage,
  faOtter,
  faFloppyDisk,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../reducers/user";

function Settings() {
  const user = useSelector((state) => state.user.value);
  console.log(user);
  const [wantToDelete, setWantToDelete] = useState(false);
  // Effet pour forcer un re-rendering lorsque `wantToDelete` change

  const deleteAccount = () => {
    setWantToDelete(true);
  };

  const dispatch = useDispatch();

  const deleteConfirmed = () => {
    fetch("http://localhost:3000/users/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ token: user.token }), // Inclure le token de l'utilisateur ici
    }).then((data) => {
      console.log("this", data.ok);
      if (data.ok === true) {
        window.location.href = "/";
        dispatch(logout());
      } else {
        console.log("Pas d'utilisateur trouvé");
      }
    });
  };

  return (
    <div className={styles.settingsBox}>
      <div className={styles.topCard}>
        {/* settings user */}
        <div className={styles.changePic}>
          {/* changer de photo de profil */}
        </div>
        <div className={styles.fieldCardTop}>
          {/* change username */}
          <text>Nom d'utilisateur: </text>
          <input
            type="field"
            placeholder="Entrez votre pseudo"
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
          <text>Mot de passe: </text>
          <input
            type="field"
            placeholder="Nouveau mot de passe"
            className={styles.fields}
          ></input>
          <input
            type="field"
            placeholder="Confirmez votre nouveau mot de passe"
            className={styles.fields}
          ></input>
        </div>
      </div>

      <div className={styles.bottomCard}>
        {/* settings preference */}
        <div className={styles.onOff}>
          <div className={styles.fieldCardBottom}>
            {/* star on off */}
            <FontAwesomeIcon
              icon={faStar}
              alt="Une étoile"
              style={{ width: "20px", color: "white", fontSize: "3rem" }}
            />
            <text className={styles.settingsText}>
              Les étoiles me notifient quand ma musique passe.
              Activer/désactiver les notifications
            </text>
            <button type="radio" className={styles.buttonOnOff}>
              OFF/ON
            </button>
          </div>
        </div>
        <div className={styles.onOff}>
          <div className={styles.fieldCardBottom}>
            {" "}
            {/* tchat on off */}
            <FontAwesomeIcon
              icon={faMessage}
              alt="Une bulle de dialogue"
              style={{ width: "20px", color: "white", fontSize: "3rem" }}
            />
            <text className={styles.settingsText}>
              Désactiver/activer la présence du tchat
            </text>
            <button type="radio" className={styles.buttonOnOff}>
              OFF/ON
            </button>
          </div>
        </div>

        <div className={styles.onOff}>
          {" "}
          {/* mascottes on off */}
          <div className={styles.fieldCardBottom}>
            <FontAwesomeIcon
              icon={faOtter}
              alt="Une loutre"
              style={{ width: "20px", color: "white", fontSize: "3rem" }}
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
        <div className={styles.deleteAccount} onClick={() => deleteAccount()}>
          <FontAwesomeIcon
            alt="Une poubelle pour supprimer mon compte"
            icon={faTrash}
            style={{ width: "20px", color: "white", fontSize: "3rem" }}
          />
        </div>
        {wantToDelete ? (
          <div>
            <text>
              Es-tu sur de vouloir supprimer ton compte? Tu perdras tes étoiles
              et tes likes et tu ne pourras plus poster dans le tchat!{" "}
            </text>
            <div className={styles.deleteOrNotButtons}>
              <button
                type="button"
                onClick={() => {
                  setWantToDelete(false);
                  console.log("hh");
                }}
              >
                Non
              </button>
              <button type="button" onClick={() => deleteConfirmed()}>
                Oui
              </button>
            </div>
          </div>
        ) : (
          <div>
            <text>Supprimer mon compte</text>
          </div>
        )}

        <div className={styles.separationLine}></div>
        <div className={styles.saveSettings}>
          <span className={styles.icon}>
            <FontAwesomeIcon
              icon={faFloppyDisk}
              alt="Une icône de disquette pour sauvegarder les changements"
              style={{ width: "20px", color: "white" }}
            />
            <text>Save changes</text>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Settings;
