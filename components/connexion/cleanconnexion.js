import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../connexion/connexion.module.css";
import SignIn from "./SignIn"; // connexion (compte existant)
import SignUp from "./SignUp"; // inscription
import { useRouter } from "next/router";
import { login } from "../../reducers/user";
import Link from "next/link";

const Connexion = () => {
  const router = useRouter();

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
    userName: "",
    email: "",
    password: "",
  });
  const [formDataSignIn, setFormDataSignIn] = useState({
    username: "",
    password: "",
  });
  const [isSignInVisible, setIsSignInVisible] = useState(true); // pour faire apparaître signin en premier
  const toggleConnexionForm = () => {
    setIsSignInVisible(!isSignInVisible); // inverser true false pour toggle connexion/inscription
  };

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <h1 className={styles.title}>
          {isSignInVisible ? "CONNEXION" : "INSCRIPTION"}
        </h1>
        <div>
          {isSignInVisible ? <SignIn /> : <SignUp />}{" "}
          {/* Si isSignInVisible = true alors render component SignIn, sinon SignUp */}
          <button onClick={() => toggleConnexionForm()}>
            {isSignInVisible ? "Vous n'avez pas de compte?" : "Déjà inscrit?"}{" "}
            {/* Si isSignInVisible = true alors render "pas de compte?", sinon "déjà inscrit" */}
          </button>
        </div>
        <Link className={styles.guestmode} href="/">
          Rester en mode invité
        </Link>
      </div>
    </main>
  );
};

export default Connexion;
