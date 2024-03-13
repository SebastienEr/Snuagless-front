import React, { useState, useEffect } from "react";
import styles from "../HomePage/Poulpy.module.css";

const Poulpy = () => {
  const [isSpacePressed, setIsSpacePressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Space") {
        setIsSpacePressed(true);
        setTimeout(() => {
          setIsSpacePressed(false);
        }, 3000); // Change the duration of rotation as needed
      }
      // if (event.code === "ArrowUp") {
      //   setPosition((prevPosition) => ({ 
      //     ...prevPosition,
      //     y: prevPosition.y - 10,
      //   }));
      // }
      // if (event.code === "ArrowDown") {
      //   setPosition((prevPosition) => ({
      //     ...prevPosition,
      //     y: prevPosition.y + 10,
      //   }));
      // }
      // if (event.code === "ArrowLeft") {
      //   setPosition((prevPosition) => ({
      //     ...prevPosition,
      //     x: prevPosition.x - 10,
      //   }));
      // }
      // if (event.code === "ArrowRight") {
      //   setPosition((prevPosition) => ({
      //     ...prevPosition,
      //     x: prevPosition.x + 10,
      //   }));
      // }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={`${styles.squid} ${isSpacePressed ? styles.rotate : ''}`}
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
      >
        <div className={styles.shine}></div>
        <div className={styles.legs}></div>
      </div>
    </div>
  );
};

export default Poulpy;
