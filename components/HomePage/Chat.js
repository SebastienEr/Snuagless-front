import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import Pusher from "pusher-js";
import pusherConfig from "../../pusher-config.json";
import styles from "./ChatView.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const inputRef = useRef(null);
  const user = useSelector((state) => state.user.value);
  const username = user.username;

  console.log(user.username);
  useEffect(() => {
    // Initialize Pusher
    const pusher = new Pusher(pusherConfig.key, {
      cluster: pusherConfig.cluster,
    });

    // Subscribe to the 'chat' channel
    const channel = pusher.subscribe("chat_channel");

    // Bind to the 'new-message' event
    channel.bind("pusher:subscription_succeeded", () => {
      channel.bind("join", ({ name }) => handleJoin(name));
      channel.bind("part", ({ name }) => handlePart(name));
      channel.bind("message", ({ name, message, time, image, token, id }) =>
        handleMessage(name, message, time, image, token, id)
      );
    });

    fetch(`${pusherConfig.restServer}/chat/${username}`, {
      method: "PUT",
    });

    return () => {
      fetch(`${pusherConfig.restServer}/chat/${username}`, {
        method: "DELETE",
      });
    };
  }, [username]);

  const handleJoin = (name) => {
    setWelcomeMessage(`${name} has joined the chat`);
  };

  const handlePart = (name) => {
    setWelcomeMessage(`${name} has left the chat`);
  };

  const handleMessage = (name, message, time, image, token, id) => {
    console.log("Received message:", { name, message, time, token, id });

    setMessages((prevMessages) => [
      ...prevMessages,
      { name, message, time, image, token, id },
    ]);
  };

  console.log(messages);

  // Function to send a message
  const onSendMessage = async () => {
    // (9)
    const text = inputRef.current.value;
    if (text.trim() === "") {
      return;
    }
    const payload = {
      id: uuidv4(),
      message: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: user.image,
      token: user.token,
    };

    console.log(payload);
    await fetch(`${pusherConfig.restServer}/chat/${username}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    inputRef.current.value = "";
  };

  const displayMessages =
    messages.length > 0 &&
    messages.map((message, index) => {
      const { name, message: text, time, image, token, id } = message;
      const isFirstMessage =
        index === 0 || token !== messages[index - 1]?.token;
      const messageStyle = {
        display: "flex",
      };
      return (
        <div
          style={messageStyle}
          className={
            username === message.name
              ? styles.messageSent
              : styles.messageReceived
          }
          key={id}
        >
          {isFirstMessage && (
            <div className={styles.tail} style={{ zIndex: 1 }}></div>
          )}
          <div style={{ color: "black" }} className={styles.message}>
            {text}
          </div>
          <div>
            <Image
              src={image ? image : require("../../public/images/avatar.jpg")}
              width={40}
              height={40}
              style={{ borderRadius: "50%", marginBottom: "0.25rem" }}
            />
          </div>
        </div>
      );
    });

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <div style={{ height: "70%", overflowY: "scroll" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          {displayMessages}
        </ul>
      </div>
      <div style={{ marginBottom: "1rem" }}>{welcomeMessage}</div>

      <div className={styles.inputContainer}>
        <textarea rows={4} placeholder="Type here..." ref={inputRef} />
        <button onClick={onSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
