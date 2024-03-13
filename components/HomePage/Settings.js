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
  faImagePortrait,
} from "@fortawesome/free-solid-svg-icons";
import { changePhoto, logout } from "../../reducers/user";
import ChangePhoto from "../ModalSettings/ChangePhoto";
import Modal from "../ModalSettings/Modal";

function Settings() {
  const [openChangePic, setOpenChangePic] = useState(false);
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
        <div className={styles.changePic}>
          {/* settings user */}
          <div styles={{ display: "flex" }}>
            <FontAwesomeIcon
              icon={faImagePortrait}
              style={{ color: "white", width: "20px", fontSize: "3rem" }}
            />
          </div>
          <text styles={{ fontSize: "12px" }}>Changer ma photo de profil</text>
          <button
            className={styles.settingsButton}
            styles={{ fontSize: "14px" }}
          >
            +
          </button>
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
        <div className={styles.settingsWrapper}>
          {/* star on off */}
          <div className={styles.fieldCardBottom}>
            <FontAwesomeIcon
              icon={faStar}
              alt="Une étoile"
              style={{ fontSize: "0.5rem", color: "white", width: "200px" }}
            />
            <text className={styles.settingsText}>
              Les étoiles me notifient quand ma musique passe.
              Activer/désactiver les notifications.
            </text>
            <button type="radio" className={styles.buttonOnOff}>
              OFF/ON
            </button>
          </div>

          {/* tchat on off */}
          <div className={styles.fieldCardBottom}>
            <FontAwesomeIcon
              icon={faMessage}
              alt="Une bulle de dialogue"
              style={{ fontSize: "0.10rem", color: "white", width: "100px" }}
            />
            <text className={styles.settingsText}>
              Désactiver/activer la présence du tchat
            </text>
            <button type="radio" className={styles.buttonOnOff}>
              OFF/ON
            </button>
          </div>

          {/* mascottes on off */}
          <div className={styles.fieldCardBottom}>
            <FontAwesomeIcon
              icon={faOtter}
              alt="Une loutre"
              style={{ fontSize: "0.25rem", color: "white", width: "100px" }}
            />
            <text className={styles.settingsText}>
              Désactiver/activer la présence de la mascotte
            </text>
            <button type="radio" className={styles.buttonOnOff}>
              OFF/ON
            </button>
          </div>
        </div>

        {/* Séparation et suppression du compte */}
        <div className={styles.separationLine}></div>
        <div className={styles.fieldCardBottom} onClick={() => deleteAccount()}>
          <FontAwesomeIcon
            alt="Une poubelle pour supprimer mon compte"
            icon={faTrash}
            style={{ width: "20px", color: "white" }}
          />
          <text>Supprimer mon compte</text>
        </div>
        <div className={styles.separationLine}></div>

        {/* Confirmation de suppression */}
        {wantToDelete && (
          <div className={styles.fieldCardBottom}>
            <text>
              Es-tu sur de vouloir supprimer ton compte? Tu perdras tes étoiles
              et tes likes et tu ne pourras plus poster dans le tchat!
            </text>
            <div className={styles.deleteOrNotButtons}>
              <button type="button" onClick={() => setWantToDelete(false)}>
                🔙
              </button>
              <button type="button" onClick={() => deleteConfirmed()}>
                ✅
              </button>
            </div>
          </div>
        )}
        {/* Bouton de sauvegarde */}
        <div className={styles.fieldCardSave}>
          <div className={styles.icon}>
            {" "}
            <FontAwesomeIcon
              icon={faFloppyDisk}
              alt="Une icône de disquette pour sauvegarder les changements"
              style={{ width: "20px", color: "white" }}
            />
          </div>
          <text> Sauvegarder les changements</text>
          <button className={styles.saveButton}>🥳</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
