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
import { logout, login } from "../../reducers/user";
/* import Menu from "../HomePage/Menu"; et <Menu/> dans la page où on souhaite avoir le gooey*/
function Menu() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

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
            <span className="hamburger-1">
              <FontAwesomeIcon icon={faUser} className="icon-user" />
            </span>
            <span className="hamburger-2"></span>
            <span className="hamburger-3"></span>
          </label>

          <a href="/Favorites.js" className="menu-item">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ width: "40px", marginTop: "25px" }}
            />
          </a>
          <a href="/Settings.js" className="menu-item">
            <FontAwesomeIcon
              icon={faCog}
              style={{ width: "40px", marginTop: "25px" }}
            />
          </a>
          <a href="#" className="menu-item">
            <FontAwesomeIcon
              icon={faOtter}
              style={{ width: "40px", marginTop: "25px" }}
            />
          </a>

          <span onClick={() => dispatch(logout())} className="menu-item">
            <FontAwesomeIcon
              icon={faRightToBracket}
              style={{ width: "40px", marginTop: "20px" }}
            />
          </span>
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
