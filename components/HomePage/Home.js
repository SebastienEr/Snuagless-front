import ChatView from "./ChatView";
import Header from "./Header";
import styles from "./Home.module.css";
import Program from "./Program";
import Schedule from "./Schedule";
import Player from "./player";
import Poulpy from "./Poulpy";
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
      <Modal open={modalIsOpen} onClose={closeModal}>
        {mode === "photo" && (
          <ChangePhoto onClose={closeModal} open={modalIsOpen} />
        )}
      </Modal>

      <div className={styles.home}>
        <Header onClick={() => openModal()} />
        <main className={styles.main}>
          <div className={styles.content}>
            <Program />
            <Poulpy />
            <ChatView /> {settings && <Settings />}
          </div>
          {/* </main> */}
          <Player />
        </main>
      </div>
      <Schedule />
      {/* bouton retourner en haut de page */}
      {/* <BackToTop /> */}
    </div>
  );
}

export default Home;
