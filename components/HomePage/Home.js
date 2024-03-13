// Home.js
import React, { useState, useEffect } from "react";
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
import { login } from "../../reducers/user";
import { faStar as solidStar, faStar as regularStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [currentSong, setCurrentSong] = useState({ title: '', cover: '' });
  // const musicSchema = require("../models/musicschema");
  const username = useSelector(state => state.user.value.username);
  console.log("1", username)

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
      console.log("Current song fetched:", data.title, data.cover);
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
    console.log("2", test)
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
        </main>
        <button
          className={`${styles.likeButton} ${isStarred ? styles.starred : ""}`}
          onClick={toggleStar}
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
        <div>
          <Image />
          <h2></h2>
          <text></text>
        </div>
        <div>
          {" "}
          <Image />
          <h2></h2>
          <text></text>
        </div>
        <div>
          {" "}
          <Image />
          <h2></h2>
          <text></text>
        </div>
      </footer>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <FavoriteModal currentSong={currentSong} fetchCurrentSong={fetchCurrentSong} />
      </Modal>
    </div>
  );
}

export default Home;
