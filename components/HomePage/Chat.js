import React from "react";
import Image from "next/image";
import styles from "./Chat.module.css";

function Chat() {
  return (
    <div className={styles.container}>
      <h2>Chat</h2>

      <Image src={require("../../public/images/lock.png")} />
    </div>
  );
}

export default Chat;
