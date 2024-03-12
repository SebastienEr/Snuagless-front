import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Pusher from "pusher-js";
import pusherConfig from "../../pusher-config.json";
import styles from "./ChatView.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Chat = () => {
  // console.log("rerender");
  const [messages, setMessages] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const inputRef = useRef(null);
  const user = useSelector((state) => state.user.value);
  const username = user.username;
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    // Initialize Pusher
    const pusher = new Pusher(pusherConfig.key, {
      cluster: pusherConfig.cluster,
    });

    // Subscribe to the 'chat' channel
    const channel = pusher.subscribe("chat_channel");

    // Bind to the 'new-message' event
    channel.bind("pusher:subscription_succeeded", () => {
      fetchMessages(username);

      channel.bind("join", async ({ name, messages }) => {
        handleJoin(username, messages);

        // Send a request to fetch messages for the current user only
      });
      channel.bind("part", ({ name }) => handlePart(name));
      channel.bind("message", ({ name, text, time, image, token }) =>
        handleMessage(name, text, time, image, token)
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

  const fetchMessages = async (username) => {
    try {
      const response = await fetch(
        `${pusherConfig.restServer}/chat/messages/${username}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      const data = await response.json();
      console.log(data.messages);

      const fetchedMessages = data.messages.map((message) => {
        return {
          name: message.user.username,
          text: message.text,
          time: message.time,
          image: message.user.profilePic,
          id: message._id,
        };
      });
      setMessages(fetchedMessages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleJoin = (name, messages) => {
    if (name === null) {
      return;
    }

    setWelcomeMessage(`${name} has joined the chat`);
  };

  const handlePart = (name) => {
    if (!name) {
      return;
    }
    setWelcomeMessage(`${name} has left the chat`);
  };

  const handleMessage = (name, text, time, image, token) => {
    console.log("Received message:", { name, text, time, token, image });

    setMessages((prevMessages) => [
      ...prevMessages,
      { name, text, time, image },
    ]);
  };

  // Function to send a message
  const onSendMessage = async () => {
    // (9)
    const text = inputRef.current.value;
    if (text.trim() === "") {
      return;
    }
    // console.log(user.image);
    const payload = {
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      image: user.image,
      token: user.token,
    };

    await fetch(`${pusherConfig.restServer}/chat/${username}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    inputRef.current.value = "";
  };

  // console.log(messages);

  const displayMessages =
    messages?.length > 0 &&
    messages.map((message, index) => {
      // const { name, text, image, time, token, _id } = message;
      const { name, text, image, time, id } = message;
      console.log(message);

      const messageStyle = {
        display: "flex",
        flexDirection: username !== name && "row-reverse",
        alignItems: "flex-start",
        justifyContent: "flex-end",
      };
      return (
        <div
          style={messageStyle}
          className={
            username === name ? styles.messageSent : styles.messageReceived
          }
          key={id}
        >
          <div className={styles.message}>
            <div
              style={{
                fontWeight: "500",
                textAlign: "left",
                marginTop: "0.25rem",
              }}
            >
              {name}
            </div>
            {text}
            <div
              style={{
                fontSize: "0.75rem",
                textAlign: "right",
                marginTop: "0.25rem",
              }}
            >
              {time}
            </div>
          </div>
          <div>
            <Image
              src={image ? image : require("../../public/images/avatar.jpg")}
              width={40}
              height={40}
              style={{
                borderRadius: "50%",
                marginBottom: "0.25rem",
                margin: 0,
              }}
            />
          </div>
        </div>
      );
    });

  return (
    <div style={{ height: "90%", textAlign: "center" }}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "70%",
          margin: 0,
          padding: 0,
          overflowY: "scroll",
        }}
      >
        {displayMessages}
      </ul>

      <div style={{ marginBottom: "1rem", fontWeight: "500", color: "#fff" }}>
        {welcomeMessage}
      </div>

      <div className={styles.inputContainer}>
        <textarea rows={4} placeholder="Type here..." ref={inputRef} />
        {user.username ? (
          <button onClick={() => onSendMessage()}>Send</button>
        ) : (
          <button onClick={() => router.push("/connexion")}>
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Chat;
