import styles from "../connexion/connexion.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/user";
import Link from "next/link";

function SignUp() {
  // tous les petits useStates
  const [signUpUsername, setSignUpUsername] = useState(""); // état pour stocker username (inscription)
  const [signUpEmail, setSignUpEmail] = useState(""); // état pour stocker email  (inscription)
  const [signUpPassword, setSignUpPassword] = useState(""); // état pour stocker password (inscription)

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

  return (
    <div className={styles.inputs}>
      <div className={styles.emailBox}>
        <input
          type="email"
          required
          // placeholder="email"
          onChange={(e) => setSignUpEmail(e.target.value)}
          value={signUpEmail}
        />
        <label>Mail</label>
      </div>

      <div className={styles.usernameBox}>
        <input
          type="text"
          required
          // placeholder="Username"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
        />
        <label>Nom d'utilisateur</label>
      </div>

      <div className={styles.passwordBox}>
        <input
          type="password"
          require
          // placeholder="Password"
          onChange={(e) => setSignUpPassword(e.target.value)}
          value={signUpPassword}
        />
        <label>Mot de passe</label>
      </div>

      <button className={styles.signupbtn} onClick={() => handleRegister()}>
        S'INSCRIRE
      </button>
    </div>
  );
}

export default SignUp;
