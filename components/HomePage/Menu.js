import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faCog,
  faOtter,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.scss";
import { logout } from "../../reducers/user";
import Settings from "../HomePage/Settings";
/* import Menu from "../HomePage/Menu"; et <Menu/> dans la page où on souhaite avoir le gooey*/
function Menu() {
  const user = useSelector((state) => state.user.value);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [mascotteOpen, setMascotteOpen] = useState(true);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (settingsOpen) {
      setSettingsOpen(false);
      setFavoritesOpen(false);
    }
  };
  const openSettings = () => {
    setSettingsOpen(!settingsOpen); // Bascule entre ouvert et fermé
  };
  const openFavorites = () => {
    setFavoritesOpen(!favoritesOpen);
  };
  const changeMascotte = () => {
    setMascotteOpen(!mascotteOpen);
  };

  {
    user !== null;
    return (
      <>
        <nav className="menu">
          <input
            type="checkbox"
            href="#"
            className="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <label className="menu-open-button" for="menu-open">
            <span className="hamburger-1" onClick={() => toggleMenu()}>
              <Image
                src={user.image}
                alt="user-avatar"
                width={50}
                height={50}
              />
            </span>
            <span className="hamburger-2"></span>
            <span className="hamburger-3"></span>
          </label>
          <span className="menu-item" onClick={() => openFavorites()}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ width: "20px", marginTop: "25px" }}
            />
          </span>
          <span className="menu-item" onClick={() => openSettings()}>
            <FontAwesomeIcon
              icon={faCog}
              style={{ width: "40px", marginTop: "25px" }}
            />
          </span>
          <span onClick={() => changeMascotte()} className="menu-item">
            <FontAwesomeIcon
              icon={faOtter}
              style={{ width: "40px", marginTop: "25px" }}
            />
          </span>
          <span onClick={() => dispatch(logout())} className="menu-item">
            <FontAwesomeIcon
              icon={faRightToBracket}
              style={{ width: "40px", marginTop: "20px" }}
            />
          </span>
          {settingsOpen && <Settings />}{" "}
          {/* Affiche les paramètres si settingsOpen est vrai */}
        </nav>

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="shadowed-goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
              <feColorMatrix
                in="shadow"
                mode="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2"
                result="shadow"
              />
              <feOffset in="shadow" dx="1" dy="1" result="shadow" />
              <feComposite in2="shadow" in="goo" result="goo" />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feComposite in2="goo" in="SourceGraphic" result="mix" />
            </filter>
          </defs>
        </svg>
      </>
    );
  }
}

export default Menu;
