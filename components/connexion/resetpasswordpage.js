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
  /* const [newPassword, setNewPassword] = useState(""); */
  const [resetEmail, setResetEmail] = useState(null);
  const [token, setToken] = useState("");
  console.log(resetEmail, "at the beginning");
  console.log(token, "at first refresh");

  useEffect(() => {
    if (router.query.token) {
      setToken(router.query.token);
      console.log(token, "after query");
    }
  }, [router.query.token]); // ne se lance jamais car token null si on est pas sign-in :(

  const handleResetPassword = () => {
    console.log(resetEmail, "is in reset function");
    // Vérification si le nouveau mot de passe est non vide
    if (resetEmail === null || resetEmail === "") {
      setResetStatus("Veuillez saisir un nouveau mot de passe.");
      console.log(resetStatus);
    } else {
      console.log(resetEmail, "we will try this");
      // Envoi de la demande de réinitialisation de mot de passe avec le token
      fetch(`http://localhost:3000/users/reset-password?token=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: resetEmailToStore }), // besoin d'une route en backend qui compare ce mail avec celui d'un utilisateur existant, c'est à lui que le mail de réinitialisation de mot de passe doit s'envoyer!
      })
        .then((response) => {
          if (response.ok) {
            setResetStatus("Mot de passe modifié avec succès.");
            // Vous pouvez ajouter ici une redirection ou toute autre action en cas de succès
          } else {
            setResetStatus(
              "Erreur lors de la réinitialisation du mot de passe."
            );
          }
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la réinitialisation du mot de passe :",
            error
          );
          setResetStatus(
            "Erreur lors de la réinitialisation du mot de passe. Veuillez réessayer."
          );
        });
    }
  };

  return (
    <div className={styles["reset-password-page"]}>
      <h1 className={styles["reset-password-page-h1"]}>
        Réinitialisation de mot de passe
      </h1>
      <div className={styles["reset-password-form"]}>
        <input
          type="email"
          placeholder="Entrez votre email"
          value={resetEmail}
          onChange={(e) => {
            setResetEmail(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleResetPassword();
          }}
        >
          Réinitialiser le mot de passe
        </button>
      </div>
      <p className={styles["reset-password-page-p"]}>{resetStatus}</p>
    </div>
  );
}

export default ResetPasswordPage;
