import React, { useState, useEffect } from "react";
import styles from "../connexion/connexion.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/user";
import { useRouter } from "next/router";
import ResetForm from "./resetForm";
import {
  resetEmailToStore,
  resetUsernameToStore,
  resetPasswordToStore,
} from "../../reducers/email";

const SignIn = () => {
  const user = useSelector((state) => state.user.value.username);

  const [signInUsername, setSignInUserName] = useState(""); // état pour stocker username
  const [signInPassword, setSignInPassword] = useState(""); // état pour stocker password
  const [signInAttempts, setSignInAttempts] = useState(0); // état pour stocker nombre de tentatives de connexion ratées
  const [message, setMessage] = useState(""); // état pour stocker message erreur
  const [showResetModal, setShowResetModal] = useState(false); // état pour gérer ouverture/fermeture modale réinitialiser oui/non
  const [showCooldownMessage, setShowCooldownMessage] = useState(false); // état gérer affichage ou non du message de cooldown
  const [showResetForm, setShowResetForm] = useState(false); // pour gérer component réinitialisation
  const [resetStatus, setResetStatus] = useState("");
  const token = useSelector((state) => state.user.value.token); // token en reducer user
  console.log(token, "test token");
  const router = useRouter();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.reset.value.email); // email en reducer reset
  const username = useSelector((state) => state.user.value.username); // username en reducer user
  /*   console.log(username, "test"); */

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
        console.log(data);
        if (data.result === true) {
          dispatch(
            login({
              username: signInUsername,
              token: token,
              image: data.user.profilePic,
            })
          );
          router.push("/");
          // login ok, renvoie vers homepage en étant connecté
        } else {
          setMessage("Mot de passe erroné. Veuillez réessayer.");
          setSignInAttempts(signInAttempts + 1);

          // login pas ok, renvoie message password incorrect et incrémente au compteur de tentatives échouées
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage(
          "Désolé, nous rencontrons actuellement un problème, veuillez réessayer plus tard. :)"
        );
      }); // au cas où il y aurait un petit problème, message d'erreur
  };

  useEffect(() => {
    if (signInAttempts === 3) {
      setShowResetModal(true);
      console.log("bah alors tu t'en rappelles plus?");
      // affiche la modale pour réinitialiser le password au 3e essai
    } else if (signInAttempts >= 5) {
      setShowCooldownMessage(true);
      setTimeout(() => {
        setShowCooldownMessage(false);
        setSignInAttempts(0);
      }, 15 * 60 * 1000);
      // affiche un message de cooldown et réinitialise les tentatives après 15 minutes
    }
  }, [signInAttempts]);

  const handleResetClick = () => {
    // router.push("/ResetPasswordPageWrapped");
    setShowResetForm(true);
  };

  /* const handleResetPassword = (e) => {
    const resetEmail = state.emailSlice.value.email;
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
  };  */

  const handleResetPassword = async () => {
    console.log(email, "before fetch");
    // Vérifier si l'email est non vide
    if (!email) {
      setResetStatus("Veuillez saisir un email valide.");
      return; // Arrêter l'exécution si l'email est vide
    }

    try {
      const response = await fetch(
        `http://localhost:3000/users/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ email: email }),
        }
      );
      console.log(email, "after fetch");

      if (response.ok) {
        setResetStatus("Mot de passe modifié avec succès. Vous pouvez fermer cette page et vous connecter.")

        // Vous pouvez ajouter ici une redirection ou toute autre action en cas de succès
      } else {
        const error = await response.json();
        setResetStatus(error.message);
        throw new Error(error.message);
      }
    } catch (error) {
      console.error(
        "Erreur lors de la réinitialisation du mot de passe :",
        error
      );
      setResetStatus(
        "Erreur lors de la réinitialisation du mot de passe. Veuillez réessayer."
      );
    }
  };

  return (
    <div className={styles.SignInInputs}>
      {showResetForm ? (
        <ResetForm />
      ) : (
        <>
          <div className={styles.inputs}>
            <div className={styles.usernameBox}>
              <input
                type="text"
                required
                id="sigInUsername"
                onChange={(e) => setSignInUserName(e.target.value)}
                value={signInUsername}
              />
              <label>Nom d'utilisateur</label>
            </div>
            <div className={styles.passwordBox}>
              <input
                type="password"
                id="signInPassword"
                onChange={(e) => setSignInPassword(e.target.value)}
                value={signInPassword}
              />
              <label>Mot de passe</label>
            </div>
          </div>
          <button id="connection" onClick={() => handleConnection()}>
            Se connecter
          </button>
          {message && <p>{message}</p>}
          {showResetModal && (
            <div>
              <p>Réinitialiser le mot de passe?</p>
              <button onClick={() => setShowResetModal(false)}>
                Non merci
              </button>
              <button
                onClick={() => {
                  handleResetClick();
                  handleResetPassword();
                }}
              >
                Oui
              </button>
            </div>
          )}
          {showCooldownMessage && (
            <p>Too many attempts, please wait 15 minutes cheh</p>
          )}
        </>
      )}
    </div>
  );
};

// fin const Signin

export default SignIn;
