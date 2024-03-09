import styles from "../connexion/connexion.module.css";
import React, { useState, useEffect } from "react";
import MailInput from "./mailInput";
import { useRouter } from "next/router";
// import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/user";
import Link from "next/link";




const ResetForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false); // état pour gérer ouverture & fermeture modale connexion
  const [signUpUsername, setSignUpUsername] = useState(""); // état pour stocker username (inscription)
  const [signUpEmail, setSignUpEmail] = useState(""); // état pour stocker email  (inscription)
  const [signUpPassword, setSignUpPassword] = useState(""); // état pour stocker password (inscription)
  const [signInUsername, setSignInUsername] = useState(""); // état pour stocker username (connexion)
  const [signInPassword, setSignInPassword] = useState(""); // état pour stocker password (connexion)
  const [passwordAttempts, setPasswordAttempts] = useState(0); // état pour stocker le nombre de tentatives de connexion ratées
  const [message, setMessage] = useState(""); // état pour stocker messages d'erreurs
  const [showResetModal, setShowResetModal] = useState(false); // état pour gérer ouverture/fermeture modale réinialisation password
  const [showCooldownMessage, setShowCooldownMessage] = useState(false); // état pour contrôler affichage du message de cooldown
  const [resetEmail, setResetEmail] = useState(""); // état pour stocker mail (réinitialisation)
  const [isEmailValid, setIsEmailValid] = useState(false); // état pour check si mail valide/invalide
  const [showResetForm, setShowResetForm] = useState(false); // état pour gérer ouverture/fermeture envoi lien réinitialisation
  const [formDataSignUp, setFormDataSignUp] = useState({
    isConnected: false,
    userEmail: "",
  });

  const handleResetPassword = (e) => {
   
    
    e.preventDefault();
    router.push("/ResetPasswordPageWrapped");
    fetch("http://localhost:3000/users/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: resetEmail,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === true) {
          dispatch(login({ email: resetEmail }));
        }
      });

    const userEmail = [user.useremail];
    console.log(user.userEmail);
    if (userEmail.includes(resetEmail)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    setShowResetModal(false);
  };

  useEffect(() => {
    if (passwordAttempts === 3) {
      setShowResetModal(true);
      console.log("bah alors tu t'en rappelles plus?");
      // affiche la modale pour réiniialiser le password au 3e essai
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
        <button className={styles.signup} onClick={() => setIsOpenSignUp(true)}>
          Vous avez déjà un compte?
        </button>
        {isOpenSignUp && (
          <div className={styles.modal}>
            <div className="modal-content">
              <span className="close" onClick={() => setIsOpenSignUp(false)}>
                &times;
              </span>
              <h2>Se connecter</h2>
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                id="signInUsername"
                onChange={(e) => setSignInUsername(e.target.value)}
                value={signInUsername}
              />
              <input
                type="password"
                placeholder="Mot de passe"
                id="signInPassword"
                onChange={(e) => setSignInPassword(e.target.value)}
                value={signInPassword}
              />
              <button id="connection" onClick={() => handleConnection()}>
                Se connecter
              </button>
              {message && <p>{message}</p>}
              {showResetModal && (
                <div>
                  <p>Réinitialiser les mot de passe?</p>
                  <button onClick={() => setShowResetModal(false)}>non merci</button>
                  <button
                    onClick={() => {
                      handleConnection
                      setShowResetForm(true);
                      setShowResetModal(false);
                    }}
                  >
                    OUIIIII
                  </button>
                </div>
              )}
              {showCooldownMessage && <p>Too many attempts, please wait 15 minutes cheh</p>}
            </div>
          </div>
        )}
        {showResetForm && (
          <div>
            <form onSubmit={handleResetPassword}>
              <input
                type="email"
                placeholder="Entrez votre adresse e-mail"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              <button type="submit">Envoyer le lien de réinitialisation</button>
            </form>
            {isEmailValid && <p>Nous n'avons pas cet email dans notre base de données.</p>}
          </div>
        )}
      </div>
    );
  }

  const handleRegister = () => {
    // Implement handleRegister function
  };

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <h1 className={styles.title}>INSCRIPTION</h1>
        <div className={styles.inputs}>
          <div className={styles.emailBox}>
            <input
              type="email"
              required
              onChange={(e) => setSignUpEmail(e.target.value)}
              value={signUpEmail}
            />
            <label>Mail</label>
          </div>

          <div className={styles.usernameBox}>
            <input
              type="text"
              required
              onChange={(e) => setSignUpUsername(e.target.value)}
              value={signUpUsername}
            />
            <label>Nom d'utilisateur</label>
          </div>

          <div className={styles.passwordBox}>
            <input
              type="password"
              required
              onChange={(e) => setSignUpPassword(e.target.value)}
              value={signUpPassword}
            />
            <label>Mot de passe</label>
          </div>

          <button className={styles.signupbtn} onClick={handleRegister}>
            S'INSCRIRE
          </button>
        </div>
        {userSection}
        <Link className={styles.guestmode} href="/">
          Rester en mode invité
        </Link>
      </div>
    </main>
  );
};

export default ResetForm;
