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
        {isSignInVisible ? <SignIn /> : <SignUp />}{" "}
        {/* Si isSignInVisible = true alors render component SignIn, sinon SignUp */}
        <div className={styles.bottomMsg}>
          <div
            className={styles.toggleText}
            onClick={() => toggleConnexionForm()}
          >
            {isSignInVisible
              ? "Vous n'avez pas de compte?"
              : "Vous avez déjà un compte?"}{" "}
            {/* Si isSignInVisible = true alors render "pas de compte?", sinon "déjà inscrit" */}
          </div>
        </div>
        <Link href="/">
          <a className={styles.guestmode}>mode invité</a>
        </Link>
      </div>
    </main>
  );
};

export default Connexion;
