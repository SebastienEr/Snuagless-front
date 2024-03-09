import styles from "../connexion/connexion.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MailInput from "./mailInput";

const ResetForm = () => {
  const [resetEmail, setResetEmail] = useState(""); // état pour stocker mail (réinitialisation)
  const [isEmailValid, setIsEmailValid] = useState(false); // état pour check si mail valide/invalide

  const handleResetPassword = (e) => {
    e.preventDefault();
    const userEmail = [mailsdesusersSEBOSCOUR];
    if (userEmail.includes(resetEmail)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    setShowResetModal(false);
  };

  const handleResetPasswordClick = () => {
    router.push("/ResetPasswordPageWrapped");
  };

  return (
    <div className={styles.inputs}>
      <div className={styles.emailBox}>
        <form onSubmit={() => handleResetPasswordClick()}>
          <MailInput
            value={resetEmail}
            onChange={(value) => setResetEmail(value)}
            required={true}
          />
          <button type="submit">Envoyer le lien de réinitialisation</button>
        </form>
        {isEmailValid && (
          <p>Nous n'avons pas cet email dans notre base de données.</p>
        )}
      </div>
    </div>
  );
};

export default ResetForm;
