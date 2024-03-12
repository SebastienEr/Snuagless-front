import React, { useState } from 'react';
import ChatView from "./ChatView";
import Header from "./Header";
import styles from "./Home.module.css";
import Program from "./Program";
import Schedule from "./Schedule";
import Player from "./player";
import Poulpy from "./Poulpy";
import AxeptioWidget from "./Cookies";
import Modal from "../ModalSettings/Modal";
import ChangePhoto from "../ModalSettings/ChangePhoto";
import { useSelector } from "react-redux";
import { settings } from "../../reducers/user";
import Settings from "./Settings";
import BackToTop from "./backToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isStarred, setIsStarred] = useState(false); // État pour vérifier si l'étoile est activée ou non

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleStar = () => {
    setIsStarred(prevState => !prevState); // Inverse l'état de l'étoile
  };

  return (
    <div className={styles.tout}>
      <Modal open={modalIsOpen} onClose={closeModal}>
        <Settings />
      </Modal>

      <div className={styles.home}>
        <Header onClick={() => openModal()} />
        <main className={styles.main}>
          <div className={styles.content}>
            <Program />
            <Poulpy />
            <ChatView />
            {/* Ici, vous pouvez mettre d'autres éléments de votre contenu */}
          </div>
          <Player />
        </main>
        {/* Utilisation de la classe "starred" conditionnelle pour afficher l'étoile vide ou jaune */}
        <button className={`${styles.likeButton} ${isStarred ? styles.starred : ""}`} onClick={toggleStar}>
          <FontAwesomeIcon icon={isStarred ? solidStar : regularStar} className={styles.heartIcon} style={{ color: isStarred ? 'yellow' : 'inherit' }} />
        </button>
      </div>
      <Schedule />
      {/* bouton retourner en haut de page */}
      {/* <BackToTop /> */}
    </div>
  );
}

export default Home;
