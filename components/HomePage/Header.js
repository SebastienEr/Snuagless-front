import React, { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "../HomePage/Menu";
import styles from "./Header.module.css";

function Header() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <header className={styles.header}>
      <Image src={require("../../public/images/logo.png")} />
      <h1>Snuagless</h1>
      <button>
        <span>Se Connecter</span>
        <span style={{ marginLeft: "2rem" }}>
          <Image src={require("../../public/images/userIcon.png")} />
        </span>
      </button>
      <Menu />
    </header>
  );
}

export default Header;
