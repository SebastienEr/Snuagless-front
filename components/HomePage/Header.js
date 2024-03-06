import React, { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "../HomePage/Menu";
import styles from "./Header.module.css";
import Signup from "../connexion/connexion";
import Link from "next/link";

function Header({ onClick }) {
  const [authenticated, setAuthenticated] = useState(false);

  /*   const handleRedirect = () => {
    // Définissez la page de redirection (par exemple, "/connexion")
    const path = "http://localhost:3000/signup";
    history.push(path); // Redirigez l'utilisateur vers la page de connexion
  };
 */
  return (
    <header className={styles.header}>
      <Image
        src={require("../../public/images/logo.png")}
        className={styles.sunglasses}
        onClick={onClick}
      />
      <h1 className={styles.snuagless}>Snuagless</h1>
      {authenticated ? (
        <Menu />
      ) : (
        <button>
          <Link href="/connexion">Se Connecter</Link>
          <span style={{ marginLeft: "2rem" }}>
            <Image src={require("../../public/images/userIcon.png")} />
          </span>
        </button>
      )}
    </header>
  );
}

export default Header;
