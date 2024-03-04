import React, { useState } from "react";
import Image from "next/image";

function Menu() {
  //ouverture et fermture du menu gooey
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };

  const menuContent = (
    <div>
      <ul>
        <li>
          <input type="button">LALA</input>
        </li>
        <li>
          <button> LALALA</button>
        </li>
        <li>
          <button>LALALALA</button>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      />

      <nav class="menu">
        <input
          onClick={() => toggleMenu()}
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
        {isOpen && (
          <div>
            <a href="#" class="menu-item">
              {" "}
              <i class="fa fa-plus"></i>{" "}
            </a>
            <a href="#" class="menu-item">
              {" "}
              <i class="fa fa-heart"></i>{" "}
            </a>
            <a href="#" class="menu-item">
              {" "}
              <i class="fa fa-cog"></i>{" "}
            </a>{" "}
          </div>
        )}
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
            <feBlend in2="shadow" in="goo" result="goo" />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
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
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Menu;
