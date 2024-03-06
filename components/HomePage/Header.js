import React, { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "../HomePage/Menu";
import styles from "./Header.module.css";
import Signup from "../connexion/connexion";

function Header() {
  const [authenticated, setAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleConnexion = () => {
    setShowModal(!showModal); // Inverse l'état de la modale
  };

  return (
    <header className={styles.header}>
      <Image
        src={require("../../public/images/logo2.png")}
        className={styles.sunglasses}
      />
      <h1 className={styles.snuagless}>Snuagless</h1>
      {authenticated ? (
        <Menu />
      ) : (
        <button onClick={() => toggleConnexion()}>
          <span>Se Connecter</span>
          <span style={{ marginLeft: "2rem" }}>
            <Image src={require("../../public/images/userIcon.png")} />
          </span>
        </button>
      )}
      {showModal && <Signup />} {/* Affiche la modale si showModal est true */}
    </header>
  );
}

export default Header;
