import React, { useState } from "react";
import styles from "./ChatView.module.css";
import PulsatingLock from "./PulsatingLock";
import Chat from "./Chat";

function ChatView() {
  const [authenticated, setAuthenticated] = useState(true);

  let content;

  if (authenticated) {
    content = (
      <div className={styles.inputContainer}>
        <textarea rows={4} placeholder="Type here..." />
        <button>Send</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Tchat</h2>

      {!authenticated && <PulsatingLock />}

      {authenticated && <Chat />}
    </div>
  );
}

export default ChatView;
