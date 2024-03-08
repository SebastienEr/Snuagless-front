import styles from "../connexion/connexion.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/user";
import Link from "next/link";

function Signup() {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [formDataSignUp, setFormDataSignUp] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [formDataSignIn, setFormDataSignIn] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [passwordAttempts, setPasswordAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [showCooldownMessage, setShowCooldownMessage] = useState(false);

 const handleResetPasswordClick = () => {
    router.push('/ResetPasswordPageWrapped');
 }



  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        email: signUpEmail,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          dispatch(login({ username: signUpUsername, token: data.token }));
          router.push("/VerifPageWrapper");
        } else {
          console.error("Echec");
        }
      });
  };

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          dispatch(login({ username: signInUsername, token: data.token }));
          router.push("/");
        } else {
          setMessage("Invalid password. Please try again.");
          setPasswordAttempts((prevAttempts) => prevAttempts + 1);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("An error occurred, please try again later :)");
      });
  };

  useEffect(() => {
    if (passwordAttempts === 3) {
      setShowResetModal(true);
      console.log("Reset password modal should be shown");
    } else if (passwordAttempts >= 5) {
      setShowCooldownMessage(true);
      setTimeout(() => {
        setShowCooldownMessage(false);
        setPasswordAttempts(0);
      }, 15 * 60 * 1000);
    }
  }, [passwordAttempts]);

  let userSection;
  if (!user.isConnected) {
    userSection = (
      <div className={styles.connect}>
        <p>Vous avez déjà un compte?</p>
        <button className={styles.signup} onClick={() => setIsOpenSignUp(true)}>
          Sign in
        </button>
        {isOpenSignUp && (
          <div className={styles.modal}>
            <div className="modal-content">
              <span className="close" onClick={() => setIsOpenSignUp(false)}>
                &times;
              </span>
              <h2>Sign in</h2>
              <input
                type="text"
                placeholder="Username"
                id="signInUsername"
                onChange={(e) => setSignInUsername(e.target.value)}
                value={signInUsername}
              />
              <input
                type="password"
                placeholder="Password"
                id="signInPassword"
                onChange={(e) => setSignInPassword(e.target.value)}
                value={signInPassword}
              />
              <button id="connection" onClick={() => handleConnection()}>
                Sign in
              </button>
              {message && <p>{message}</p>}
              {showResetModal && (
                <div>
                  <p>Réinitialiser le mot de passe?</p>
                  <button onClick={() => setShowResetModal(false)}>Non merci</button>
                  <button onClick={handleResetPasswordClick}>Oui</button>
                </div>
              )}
              {showCooldownMessage && <p>Too many attempts, please wait 15 minutes</p>}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <h1 className={styles.title}>INSCRIPTION</h1>
        <div className={styles.inputs}>
          <input
            className={styles.email}
            type="text"
            placeholder="Email"
            onChange={(e) => setSignUpEmail(e.target.value)}
            value={signUpEmail}
          />
          <input
            className={styles.username}
            type="text"
            placeholder="Username"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
          />
          <input
            className={styles.password}
            type="password"
            placeholder="Password"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          />
          <button className={styles.signupbtn} onClick={handleRegister}>
            Sign Up
          </button>
        </div>
        {userSection}
        <Link className={styles.guestmode} href="/">
          Rester en mode invité
        </Link>
      </div>
    </main>
  );
}

export default Signup;
