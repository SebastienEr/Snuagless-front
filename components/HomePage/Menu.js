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
/* import styles from "../../styles/globals.scss"; */
import { logout } from "../../reducers/user";
import Settings from "../HomePage/Settings";

/* import Menu from "../HomePage/Menu"; et <Menu/> dans la page où on souhaite avoir le gooey*/
function Menu() {
  const user = useSelector((state) => state.user.value);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [mascotteOpen, setMascotteOpen] = useState(true);
  const image = useSelector((state) => state.user.value.image);
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
    setFavoritesOpen(!favoritesOpen); //Favoris ouvert/fermé
  };
  const changeMascotte = () => {
    setMascotteOpen(!mascotteOpen); //mascotte présente/absente
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
            onClick={() => toggleMenu()}
          />
          <label className="menu-open-button" for="menu-open">
            <span className="hamburger-1">
              {image && (
                <img
                  src={image}
                  alt="Avatar de l'utilisateur - ouvre le menu"
                  styles={{
                    height: "40px",
                    width: "44px",
                    fontSize: "2rem",
                  }}
                />
              )}
            </span>
          </label>
          {/* Expliquer pk  */}
          <span
            className="menu-item"
            style={{ display: "none" }}
            onClick={() => openFavorites()}
          >
            <FontAwesomeIcon
              alt="icône en forme de coeur. Mes 10 musiques favorites"
              icon={faHeart}
              style={{ fontSize: "2rem" }}
            />
          </span>
          <span
            className="menu-item"
            style={{ display: "none" }}
            onClick={() => openFavorites()}
          >
            <FontAwesomeIcon
              alt="icône en forme de coeur. Mes 10 musiques favorites"
              icon={faHeart}
              style={{ fontSize: "2rem" }}
            />
          </span>
          <span className="menu-item" onClick={() => openFavorites()}>
            <FontAwesomeIcon
              alt="icône en forme de coeur. Mes 10 musiques favorites"
              icon={faHeart}
              style={{ fontSize: "2rem" }}
            />
          </span>
          <span className="menu-item" onClick={() => openSettings()}>
            <FontAwesomeIcon
              icon={faCog}
              alt="Paramètres"
              style={{ fontSize: "2rem" }}
            />
          </span>{" "}
          {settingsOpen && <Settings />}{" "}
          <span onClick={() => changeMascotte()} className="menu-item">
            <FontAwesomeIcon
              icon={faOtter}
              alt="Mascotte - Cliquer pour changer de mascotte"
              style={{ fontSize: "2rem" }}
            />
          </span>
          <span onClick={() => dispatch(logout())} className="menu-item">
            <FontAwesomeIcon
              alt="Me déconnecter"
              icon={faRightToBracket}
              style={{ fontSize: "2rem" }}
            />
          </span>
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
