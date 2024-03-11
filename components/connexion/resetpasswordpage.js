import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../connexion/resetpasswordpage.module.css";
import { useDispatch, useSelector } from "react-redux";

// Import des actions de redux
import { login } from "../../reducers/user";
import { resetEmailToStore } from "../../reducers/email";

function ResetPasswordPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [resetStatus, setResetStatus] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [token, setToken] = useState("");
  const [showResetForm, setShowResetForm] = useState(false); // Pour afficher/masquer le formulaire de réinitialisation

  useEffect(() => {
    if (router.query.token) {
      setToken(router.query.token);
      // Une fois que le token est défini, afficher le formulaire de réinitialisation
      setShowResetForm(true);
    }
  }, [router.query.token]);


  const handleResetPassword = () => {
    fetch(`http://localhost:3000/forgetpassword/forgetpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token, newPassword: resetEmail }),
    })
      .then((response) => {
        if (response.ok) {
          setResetStatus("Mot de passe modifié avec succès.");
          // Redirection ou autre action en cas de succès
        } else {
          throw new Error("Erreur lors de la réinitialisation du mot de passe.");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la réinitialisation du mot de passe :", error);
        setResetStatus("Erreur lors de la réinitialisation du mot de passe. Veuillez réessayer.");
      });
  };

  return (
    <div className={styles["reset-password-page"]}>
      <h1 className={styles["reset-password-page-h1"]}>
        Réinitialisation de mot de passe
      </h1>
      {!showResetForm ? (
        <div>
          <p>Si un compte est associé à cette adresse e-mail, un e-mail vous a été envoyé :</p>
          {/* <button onClick={handleSendResetEmail}>Renvoyer l'e-mail de réinitialisation</button> */}
          <p className={styles["reset-password-page-p"]}>{resetStatus}</p>
        </div>
      ) : (
        <div>
          <input
            type="password"
            placeholder="Entrez votre nouveau mot de passe"
            value={resetEmail}
            onChange={(e) => {
              setResetEmail(e.target.value);
            }}
          />
          <button onClick={handleResetPassword}>Réinitialiser le mot de passe</button>
          <p className={styles["reset-password-page-p"]}>{resetStatus}</p>
        </div>
      )}
    </div>
  );
}

export default ResetPasswordPage;
