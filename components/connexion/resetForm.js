import styles from "../connexion/connexion.module.css";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MailInput from "./mailInput";
import { useRouter } from "next/router";
import { login } from "../../reducers/user";

const ResetForm = () => {
  const [resetEmail, setResetEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const router = useRouter();
  const userEmail = useSelector((state) => state.reset.value.email);
  const user = useSelector((state) => state.user.value);

  const handleResetPassword = (e) => {
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
  };

  return (
    <div className={styles.inputs}>
      <div className={styles.emailBox}>
        <form onSubmit={handleResetPassword}>
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
