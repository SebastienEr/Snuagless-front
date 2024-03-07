import React from "react";
import styles from "./BackToTop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function BackToTop() {
  return (
    <>
      <a href="#">
        <div className={styles.circle}>
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{
              width: "16px",

              color: "white",
            }}
          />
        </div>
      </a>
    </>
  );
}

export default BackToTop;
