import React, { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "../HomePage/Menu";
import styles from "./Header.module.css";
import Signup from "../connexion/connexion";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/user";
function Header({ onClick, onSetMode }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);
  return (
    <header className={styles.header}>
      <Image
        src={require("../../public/images/logo.png")}
        className={styles.sunglasses}
        onClick={onClick}
      />
      <h1 className={styles.snuagless}>Snuagless</h1>
      <div>
        {user?.username ? (
          <div className={styles.connected}>
            <div> Connecté en tant que {user.username} </div>
            <Menu onClick={onClick} onSetMode={onSetMode} />
          </div>
        ) : (
          <button>
            <Link href="/connexion">Se Connecter</Link>
            <span>
              <Image src={require("../../public/images/userIcon.png")} />
            </span>
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
