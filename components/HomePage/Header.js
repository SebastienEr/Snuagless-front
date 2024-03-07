import React, { useState, useEffect } from "react";
import Image from "next/image";
import Menu from "../HomePage/Menu";
import styles from "./Header.module.css";
import Signup from "../connexion/connexion";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/user";
function Header({ onClick }) {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.value);
  return (
    <header className={styles.header}>
      <Image
        src={require("../../public/images/logo.png")}
        className={styles.sunglasses}
      />
      <h1 className={styles.snuagless}>Snuagless</h1>
      {user.token ? (
        <>
          <div>
            {user.username}
            {user.image ? (
              <Image
                src={user.image}
                alt="user-avatar"
                width={50}
                height={50}
                onClick={onClick}
              />
            ) : (
              <Image
                src={require("../../public/images/avatar.jpg")}
                alt="user-avatar"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
                onClick={onClick}
              />
            )}
          </div>
          <Menu />
        </>
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
