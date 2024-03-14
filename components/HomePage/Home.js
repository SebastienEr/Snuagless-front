import React, { useState, useEffect, useEffect } from "react";
import { useSelector } from "react-redux"; // Pour accéder au token utilisateur
import ChatView from "./ChatView";
import Header from "./Header";
import styles from "./Home.module.css";
import Program from "./Program";
import Schedule from "./Schedule";
import Player from "./player";
import Poulpy from "./Poulpy";
import Modal from "../ModalSettings/Modal";
import FavoriteModal from "../HomePage/Favorites";

import BackToTop from "./backToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function Home() {
  const [favoriteModalIsOpen, setFavoriteModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [currentSong, setCurrentSong] = useState({ title: '', cover: '' });
  // const musicSchema = require("../models/musicschema");
  const username = useSelector(state => state.user.value.username);
  console.log("1", username)


const toggleModal = () => {
  setModalIsOpen(!modalIsOpen);
};

const toggleFavoriteModal = () => {
  setFavoriteModalIsOpen(!favoriteModalIsOpen);
};

  useEffect(() => {
    fetchCurrentSong();
  }, []);

  const fetchCurrentSong = async () => {
    
    try {
      const response = await fetch("https://api.radioking.io/widget/radio/radio-snuagless/track/current", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setCurrentSong({ title: data.title, cover: data.cover });
      console.log("aaaaaaaaaaaaaa:", data.title, data.cover);
      return { title: data.title, cover: data.cover };
    } catch (error) {
      console.error('Erreur lors de la récupération de la chanson actuelle:', error);
    }
  };
  // const test = { 
  //   username: "Eric",
  //   title: currentSong.title,
  //   cover: currentSong.cover,}
  // console.log("2", test)

  const addToFavorites = async () => {
    
    
    
    const test = { 
      username: username,
      title: currentSong.title,
      cover: currentSong.cover,}
    console.log("bbbbbbbbbbbbbbbbbbb", test)
    try {
      const response = await fetch("http://localhost:3000/users/favorites", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         test
        }),
      });
      const data = await response.json();
      console.log("Chanson ajoutée aux favoris:", data);
    } catch (error) {
      console.error("Erreur lors de l'ajout de la chanson aux favoris:", error);
    }
  };

  const toggleStar = async () => {
    setIsStarred(!isStarred);
    if (!isStarred) {
      // Ajoutez la logique pour obtenir les informations de la chanson actuelle
      const currentSongInfo = { title: currentSong.title, cover: currentSong.cover };
      await addToFavorites(currentSongInfo); // Ajouter les informations actuelles de la chanson aux favoris
    }
  };

  return (
    <div className={styles.tout}>
      <div className={styles.home}>
        <Header onClick={() => setModalIsOpen(true)} />
        <main className={styles.main}>
          <div className={styles.content}>
            <Program />
            <Poulpy />
            <ChatView />
          </div>
          <Player />
          <FavoriteModal
  isOpen={modalIsOpen}
  toggleModal={toggleModal}
/>
<div>
      {/* Your other components */}
      <button onClick={toggleFavoriteModal}>Open Favorite Modal</button>
      <FavoriteModal isOpen={favoriteModalIsOpen} toggleModal={toggleFavoriteModal} />
    </div>
        </main>
        <button
          className={`${styles.likeButton} ${isStarred ? styles.starred : ""}`}
          onClick={() => toggleStar()}
        >
          <FontAwesomeIcon
            icon={isStarred ? solidStar : regularStar}
            className={styles.heartIcon}
            style={{ color: isStarred ? "yellow" : "inherit" }}
          />
        </button>
      </div>
      <Schedule />
      <BackToTop />
      <footer className={styles.footer}>
        <div className={styles.top5}>
          {/* une image ici */}
          <h2>TOP 3</h2>
          <ul className={styles.top5Ul}>
            <li className={styles.top5Li}>
              <div className={styles.top5Title}>{topTitle1}</div>
            </li>
            <li className={styles.top5Li}>
              <div className={styles.top5Title}>{topTitle2}</div>
            </li>
            <li className={styles.top5Li}>
              <div className={styles.top5Title}>{topTitle3}</div>
            </li>
          </ul>
        </div>
        <div className={styles.divMiddleFooter}>
          {" "}
          <h2>NOUS CONTACTER</h2>
          <h2>radio@snuagless.com</h2>
          {/* une image ici */}
        </div>
        <div className={styles.divBottomFooter}>
          {" "}
          {/* une image ici */}
          <h2> QUI SOMMES NOUS ? </h2>
          <a
            target="blank"
            href="https://www.canva.com/design/DAF_CiGtLFU/h6XfrhqBsCWyrfjyWHha8w/view?utm_content=DAF_CiGtLFU&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          >
            <h2>Livre Blanc</h2>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;