import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../connexion/resetpasswordpage.module.css";
import { useDispatch } from 'react-redux';

// Import des actions de redux
import { login } from "../../reducers/user";

function ResetPasswordPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [resetStatus, setResetStatus] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    if (router.query.token) {
      setToken(router.query.token);
    }
  }, [router.query.token]);

  const handleResetPassword = () => {
    // Vérification si le nouveau mot de passe est non vide
    if (!newPassword.trim()) {
      setResetStatus('Veuillez saisir un nouveau mot de passe.');
      return;
    }

    // Envoi de la demande de réinitialisation de mot de passe avec le token
    fetch(`http://localhost:3000/changepassword/changepassword?token=${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword }),
    })
    .then(response => {
      if (response.ok) {
        setResetStatus('Mot de passe réinitialisé avec succès.');
        // Vous pouvez ajouter ici une redirection ou toute autre action en cas de succès
      } else {
        setResetStatus('Erreur lors de la réinitialisation du mot de passe.');
      }
    })
    .catch(error => {
      console.error('Erreur lors de la réinitialisation du mot de passe :', error);
      setResetStatus('Erreur lors de la réinitialisation du mot de passe. Veuillez réessayer.');
    });
  };

  return (
    <div className={styles["reset-password-page"]}>
      <h1 className={styles["reset-password-page-h1"]}>Réinitialisation de mot de passe</h1>
      <div className={styles["reset-password-form"]}>
        <input 
          type="password"
          placeholder="Nouveau mot de passe"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleResetPassword}>Réinitialiser le mot de passe</button>
      </div>
      <p className={styles["reset-password-page-p"]}>{resetStatus}</p>
    </div>
  );
}

export default ResetPasswordPage;
