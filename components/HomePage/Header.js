import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
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
    </header>
  );
}

export default Header;
