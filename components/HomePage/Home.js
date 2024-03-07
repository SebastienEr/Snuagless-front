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
      {modalIsOpen && (
        <div className={styles.backdrop} onClick={closeModal}></div>
      )}
      <Modal open={modalIsOpen} onClose={closeModal}>
        {mode === "photo" && (
          <ChangePhoto
            // userPhoto={userPhoto}
            // onSetPhoto={setUserPhoto}
            onClose={closeModal}
          />
        )}
      </Modal>

      <div className={styles.home}>
        <Header />
        <main className={styles.main}>
          <div className={styles.content}>
            <Program />
            <Poulpy />
            <ChatView />
          </div>
        {/* </main> */}
        <Player />
        </main>
      </div>
      <Schedule />
    </div>
  );
}

export default Home;
