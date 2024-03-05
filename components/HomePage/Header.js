import React, { useState } from "react";
import Image from "next/image";
import Menu from "../HomePage/Menu";
import styles from "./Header.module.css";

function Header() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <header className={styles.header}>
      <Image src={require("../../public/images/logo2.png")} className={styles.sunglasses} />
      <h1 className={styles.snuagless}>Snuagless</h1>
      <button>
        <span>Se Connecter</span>
        <span style={{ marginLeft: "2rem" }}>
          <Image src={require("../../public/images/userIcon.png")} />
        </span>
      </button>
    </header>
  );
}

export default Header;
