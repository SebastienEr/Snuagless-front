import ChatView from "./ChatView";
import Header from "./Header";
import styles from "./Home.module.css";
import Program from "./Program";
import Schedule from "./Schedule";
import Player from "./player";
import Poulpy from "./Poulpy";
import AxeptioWidget from "./Cookies";
import { useState } from "react";
import Modal from "../ModalSettings/Modal";
import ChangePhoto from "../ModalSettings/ChangePhoto";
import { useSelector } from "react-redux";
import { settings } from "../../reducers/user";
import Settings from "./Settings";
import BackToTop from "./backToTop";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [mode, setMode] = useState("photo");

  const openModal = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    setModalIsOpen((prevState) => !prevState);
  };
  const user = useSelector((state) => state.user.value);

  console.log(user);
  return (
    <div className={styles.tout}>
      {/* <Modal open={modalIsOpen} onClose={closeModal}>
        {mode === "photo" && (
          <ChangePhoto onClose={closeModal} open={modalIsOpen} />
        )}
        {mode === "settings" && <Settings />}
      </Modal> */}
      <div className={styles.home}>
        <Header onClick={() => openModal()} onSetMode={setMode} />
        <main className={styles.main}>
          <div className={styles.content}>
            <Program /> {/* Emission/Musique suivante */}
            <Poulpy /> {/* Mascotte */}
            <ChatView /> {/* tchat */}
          </div>
          <Player />
        </main>
      </div>
      <Schedule /> {/* programme de la semaine */}
      {/* bouton retourner en haut de page */}
      <BackToTop />
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default Home;
