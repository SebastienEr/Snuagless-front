import React, { useState, useEffect, useRef, useCallback } from "react";
import Pusher from "pusher-js";
import pusherConfig from "../../pusher-config.json";
import styles from "./Chat.module.css";
import Image from "next/image";
import { randomUsernames } from "./randomusernames";

const username =
  randomUsernames[Math.floor(Math.random() * randomUsernames.length - 1)];

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const inputRef = useRef(null);

  console.log(username);
  useEffect(() => {
    // Initialize Pusher
    const pusher = new Pusher(pusherConfig.key, pusherConfig);

    // Subscribe to the 'chat' channel
    const channel = pusher.subscribe("chat");

    // Bind to the 'new-message' event
    channel.bind("pusher:subscription_succeeded", () => {
      channel.bind("join", (data) => handleJoin(data.name));
      channel.bind("part", (data) => handlePart(data.name));
      channel.bind("message", (data) =>
        handleMessage(data.name, data.message, data.time)
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

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch("http://localhost:3000/message");
      const data = await response.json();
      setMessages(data.messages);
      console.log(data);
    };
    fetchMessages();
  }, [messages.length]);

  // Function to send a message

  const handleJoin = (name) => {
    setWelcomeMessage(`${name} has joined the chat`);
  };

  const handlePart = (name) => {
    setWelcomeMessage(`${name} has left the chat`);
  };

  console.log(messages);

  // Function to send a message
  const onSendMessage = useCallback(async () => {
    // (9)
    const text = inputRef.current.value;
    if (text.trim() === "") {
      return;
    }
    const payload = {
      message: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    await fetch(`${pusherConfig.restServer}/chat/${username}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      { action: "message", username, ...payload },
    ]);
    inputRef.current.value = "";

    const response = await fetch("http://localhost:3000/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        texte: payload.message,
        username: username,
      }),
    });
    const data = await response.json();

    // setMessages(data.messages);
  }, [username]);

  const displayMessages =
    messages.length > 0 &&
    messages.map((message, index) => {
      const isFirstMessage =
        index === 0 || message.username !== messages[index - 1]?.username;
      const messageStyle = {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: isFirstMessage ? "flex-end" : "flex-start",
        position: "relative",
      };
      return (
        <div style={messageStyle}>
          <div
            key={index}
            style={{ color: "black" }}
            className={styles.message}
          >
            {message.texte}
          </div>
          {isFirstMessage && <div className={styles.tail}></div>}
          <div>
            <Image
              src={require("../../public/images/avatar.jpg")}
              width={40}
              height={40}
              style={{ borderRadius: "50%", marginBottom: "0.25rem" }}
            />
          </div>
          {message.username}
          {/* <div>
            <div key={index} style={{ color: "blue" }}>
              {message.username}
            </div>
            <div key={index} style={{ color: "blue" }}>
              {message.time}
            </div>
          </div> */}
        </div>
      );
    });

  return (
    <div>
      <h1>Chat App</h1>
      <div className={styles.container}>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "100%",
            padding: "1rem",
          }}
        >
          {displayMessages}
        </ul>
        <div color="white">{welcomeMessage}</div>
      </div>

      <div>
        <input ref={inputRef} />
      </div>
      <button onClick={onSendMessage}>Send Message</button>
    </div>
  );
};

export default Chat;
