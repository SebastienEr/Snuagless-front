/* import styles from "../connexion/connexion.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/user";
import Link from "next/link"; */

/* function Signup() { */
// tous les petits useStates
/*  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
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
  const user = useSelector((state) => state.user.value); */
/*   const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [passwordAttempts, setPasswordAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [showCooldownMessage, setShowCooldownMessage] = useState(false); */

/*   const handleResetPasswordClick = () => {
    router.push("/ResetPasswordPageWrapped");
  }; */
/*   const handleRegister = () => {
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
          // login ok, renvoie vers homepage en étant connecté
        } else {
          setMessage("Mot de passe erroné. Veuillez réessayer.");
          setPasswordAttempts((prevAttempts) => prevAttempts + 1);
        } // login pas ok, renvoie message password incorrect et incrémente au compteur de tentatives échouées
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage(
          "Désolé, nous rencontrons actuellement un problème, veuillez réessayer plus tard. :)"
        );
      }); // au cas où il y aurait un petit problème, message d'erreur
  }; */

/* const handleResetPassword = (e) => {
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

    e.preventDefault();
    const userEmail = [user.useremail];
    console.log(user.userEmail);
    if (userEmail.includes(resetEmail)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    setShowResetModal(false);
  }; */

/*   useEffect(() => {
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
  }, [passwordAttempts]); */

/*   let userSection;
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
                  <button onClick={() => setShowResetModal(false)}>
                    non merci
                  </button>
                  <button
                    onClick={() => {
                      setShowResetForm(true);
                      setShowResetModal(false);
                    }}
                  >
                    OUIIIII
                  </button>
                </div>
              )}
              {showCooldownMessage && (
                <p>Too many attempts, please wait 15 minutes cheh</p>
              )}
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
            {isEmailValid && (
              <p>Nous n'avons pas cet email dans notre base de données.</p>
            )}
          </div>
        )}
      </div>
    ); */
//}

/* return (
    // <div>
    <main className={styles.main}>
      <div className={styles.form}>
        <h1 className={styles.title}>INSCRIPTION</h1>
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
    // </div>
  ); */
//}

/* export default Signup; */
