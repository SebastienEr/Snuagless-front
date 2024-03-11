import styles from "../connexion/connexion.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/user";
import Link from "next/link";
import PasswordCheck from './passwordCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function SignUp() {

  const [signUpUsername, setSignUpUsername] = useState(""); // état pour stocker username (inscription)
  const [signUpEmail, setSignUpEmail] = useState(""); // état pour stocker email  (inscription)
  const [signUpPassword, setSignUpPassword] = useState(""); // état pour stocker password (inscription)
  const [showPasswordCheck, setShowPasswordCheck] = useState(false); // pour gérer ouverture/fermeture vérif password
  const [isTypingPassword, setIsTypingPassword] = useState(false); // pour savoir si le user a déjà commencé à remplir l'input

  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

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
  const togglePasswordVisibility = () => {
    setShowPasswordCheck(!showPasswordCheck);
  };

  const handlePasswordInputChange = (event) =>{
    setSignUpPassword(event.target.value);
    setIsTypingPassword(event.target.value !== "");
  }

  return (
    <div className={styles.inputs}>
      <div className={`${styles.emailBox} ${signUpEmail ? styles.inputFilled : ''}`}>

        <input
          type="email"
          required
          placeholder="email"
          // placeholder="email"
          onChange={(e) => setSignUpEmail(e.target.value)}
          value={signUpEmail}
        />
        <label>Mail</label>
      </div>

      <div className={`${styles.usernameBox} ${signUpUsername ? styles.inputFilled : ''}`}>
        <input
          type="text"
          required
          placeholder="username"
          // placeholder="Username"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
        />
        <label>Nom d'utilisateur</label>
      </div>

      <div className={`${styles.passwordBox} ${signUpPassword ? styles.inputFilled : ''}`}>
    <input
      type={showPasswordCheck ? "text" : "password"}
      require
      placeholder="Password"
      onChange={handlePasswordInputChange}
      value={signUpPassword}
    />
    <label>
      Mot de passe
    </label>
    {/* { showPasswordCheck && <PasswordCheck />} */}
    <FontAwesomeIcon 
  icon={showPasswordCheck ? faEye : faEyeSlash}
  className={showPasswordCheck ? styles.openEyeIcon : styles.slashedEyeIcon}
  style={{ color: "#2b224f" }}
  onClick={togglePasswordVisibility} // Utilisez directement la propriété color pour définir la couleur
/>
{isTypingPassword && <PasswordCheck password={signUpPassword} />}

    {/* <img
          className={styles.eyeIcon} // Applique les styles nécessaires pour rendre l'icône plus petite
          src={showPasswordCheck ? "https://i.postimg.cc/3JHFrZ3v/eye-open.png" : "https://i.postimg.cc/HWMtCN1m/eye-close.png"}
          alt="eye"
          onClick={() => setShowPasswordCheck(!showPasswordCheck)}
        /> */}
    </div>

      <button className={styles.signupbtn} onClick={() => handleRegister()}>
        S'INSCRIRE
      </button>
    </div>
  );
}

export default SignUp;
