import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../connexion/verifpage.module.css";
import { useDispatch } from "react-redux"; // Ajout de l'import

// Import des actions de redux
import { login } from "../../reducers/user";

function VerifPage() {
  const router = useRouter();
  const dispatch = useDispatch(); // Initialisation du dispatch

  const [verificationStatus, setVerificationStatus] = useState("");

  useEffect(() => {
    if (router.query.token) {
      verifyEmail(router.query.token);
    }
  }, [router.query.token]);

  const verifyEmail = (token) => {
    /* a comment for commit reason */
    fetch(`http://localhost:3000/users/verify-email?token=${token}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(login({ token: token, username: data.username }));
          setVerificationStatus(
            "Votre email a été vérifié avec succès. Vous allez être redirigé..."
          );
          setTimeout(() => {
            router.push("/");
          }, 3000);
        } else {
          setVerificationStatus(
            "Échec de la vérification de l'email. Le lien peut être expiré ou invalide."
          );
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la vérification de l'email :", error);
        setVerificationStatus(
          "Erreur lors de la connexion au serveur. Veuillez réessayer plus tard."
        );
      });
  };

  return (
    <div className={styles["verif-page"]}>
      <h1 className={styles["verif-page-h1"]}>Vérification de l'email</h1>
      <p className={styles["verif-page-p"]}>
        {verificationStatus || "En attente de la vérification de l'email..."}
      </p>
    </div>
  );
}

export default VerifPage;
