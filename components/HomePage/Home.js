import React, { useState, useEffect } from "react";
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
import Image from "next/image";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isStarred, setIsStarred] = useState(false); // État pour vérifier si l'étoile est activée ou non
  const [topTitle1, setTopTitle1] = useState([]);
  const [topTitle2, setTopTitle2] = useState([]);
  const [topTitle3, setTopTitle3] = useState([]);
  const [topTitle4, setTopTitle4] = useState([]);
  const [topTitle5, setTopTitle5] = useState([]);
  //https://api.radioking.io/widget/radio/radio-snuagless/track/top?limit=5

  useEffect(() => {
    fetch(
      "https://api.radioking.io/widget/radio/radio-snuagless/track/top?limit=5"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("NEXT-TITLE", data);
        setTopTitle1(data[0].title);
        setTopTitle2(data[1].title);
        setTopTitle3(data[2].title);
        /* setTopTitle4(data[3].title); */
        /* setTopTitle5(data[4].title); */
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleStar = () => {
    setIsStarred((prevState) => !prevState); // Inverse l'état de l'étoile
  };

  return (
    <div className={styles.tout}>
      {/* <Modal open={modalIsOpen} onClose={closeModal}>
        <Settings />
      </Modal> */}
      <div className={styles.home}>
        <Header onClick={() => openModal()} />
        <main className={styles.main}>
          <div className={styles.content}>
            <Program /> {/* Emission/Musique suivante */}
            <Poulpy /> {/* Mascotte */}
            <ChatView /> {/* tchat */}
          </div>
          <Player />
        </main>
        {/* Utilisation de la classe "starred" conditionnelle pour afficher l'étoile vide ou jaune */}
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
      <Schedule /> {/* programme de la semaine */}
      {/* bouton retourner en haut de page */}
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
