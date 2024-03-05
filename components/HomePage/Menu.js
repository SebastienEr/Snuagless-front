import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faCog,
  faOtter,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Menu.module.scss";
/* import Menu from "../HomePage/Menu"; et <Menu/> dans la page où on souhaite avoir le gooey*/
function Menu() {
  return (
    <>
      <nav class="menu">
        <input
          type="checkbox"
          href="#"
          class="menu-open"
          name="menu-open"
          id="menu-open"
        />
        <label class="menu-open-button" for="menu-open">
          <span class="hamburger hamburger-1"></span>
          <span class="hamburger hamburger-2"></span>
          <span class="hamburger hamburger-3"></span>
        </label>

        <a href="#" class="menu-item">
          <FontAwesomeIcon icon={faHeart} size="5px" />
        </a>
        <a href="#" class="menu-item">
          <FontAwesomeIcon icon={faCog} size="5px" />
        </a>
        <a href="#" class="menu-item">
          <FontAwesomeIcon icon={faOtter} size="5px" />
        </a>
        <a href="#" class="menu-item">
          <FontAwesomeIcon icon={faUser} style={{ size: "5px" }} />
        </a>
        <a href="#" class="menu-item">
          <FontAwesomeIcon icon={faHeart} size="5px" />
        </a>
        <a href="#" class="menu-item">
          <FontAwesomeIcon icon={faHeart} size="5px" />
        </a>
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

export default Menu;
