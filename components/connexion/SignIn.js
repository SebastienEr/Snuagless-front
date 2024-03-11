import React, {useState, useEffect} from 'react';
import styles from "../connexion/connexion.module.css";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../reducers/user";
import {useRouter} from "next/router";
import ResetForm from "./resetForm";


const SignIn = () => {

    const [signInUsername, setSignInUserName] = useState(""); // état pour stocker username
    const [signInPassword, setSignInPassword] = useState(""); // état pour stocker password
    const [signInAttempts, setSignInAttempts] = useState(0); // état pour stocker nombre de tentatives de connexion ratées
    const [message, setMessage] = useState("") // état pour stocker message erreur
    const [showResetModal, setShowResetModal] = useState(false); // état pour gérer ouverture/fermeture modale réinitialiser oui/non
    const [showCooldownMessage, setShowCooldownMessage] = useState (false); // état gérer affichage ou non du message de cooldown
    const [showResetForm, setShowResetForm] = useState(false); // pour gérer component réinitialisation 

    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector ((state)=> state.user.value); // sert pour le if (!user.isConnected) mais logique pas encore implantée

    const handleConnection = () => {
        fetch ("http://localhost:3000/users/signin", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: signInUsername,
                password: signInPassword,
            }),  //fin fetch body
        }) // fin fetch users/signin
         .then((response)=>response.json())
         .then((data)=>{
            if (data.result === true) {
                dispatch(login({username: signInUsername, token: data.token}));
                router.push("/");
                // quand login ok, renvoie vers homepage en étant connecté
            } else{
                setMessage("Mot de passe erroné. Veuillez réessayer.");
                setSignInAttempts((countAttempts)=>countAttempts +1);
            } // login pas ok, renvoie message incorrect password + incrémente compteur tentatives infructueuses
         }) // fin 2e .then
          .catch((error)=>{
            console.error("Error:", error);
            setMessage("Désolé, nous rencontrons actuellement un problème, veuillez réessayer plus tard.");
          }) // gestion erreurs
    } // fin const handleConnection

const handleResetClick = ()=>{
    setShowResetForm(true);
}

    useEffect(()=> {
        if (signInAttempts === 3){
            setShowResetModal(true);
            console.log("bah alors tu t'en rappelles plus?");
            //affiche modale pour proposer la réinitialisation du mot de passe au bout du 3e essai
        } else if (signInAttempts >=5){
            setShowCooldownMessage(true);
            setTimeout(()=> {
                setShowCooldownMessage(false);
                setSignInAttempts(0);
            }, 15*60*1000);
        }
    }, [signInAttempts]); // useEffect déclenché quand signInAttempts change 

return (
    <div className={styles.SignInInputs}>
        {showResetForm ? (
            <ResetForm/>) :(
                <div>
                    <div className={styles.inputs}>
                      <div className={styles.usernameBox}>
                         <input
                             type="text"
                             required
                             id="sigInUsername"
                             onChange={(e)=> setSignInUserName(e.target.value)}
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
                    <button className={styles.signupbtn} id="connection" onClick={() => handleConnection()}>
                Se connecter
              </button>
                </div>
            
              {message && <p>{message}</p>}
              {showResetModal && (
                <div>
                  <p>Réinitialiser le mot de passe?</p>
                  <button onClick={()=> setShowResetModal(false)}>non merci</button>
                  <button onClick={handleResetClick}>OUIIIII</button>
                  {showResetForm ? <ResetForm/> : null}
                </div>
              )}
              {showCooldownMessage && <p>Too many attempts, please wait 15 minutes cheh</p>} </div>)}
            </div>
    
)

} // fin const Signin

export default SignIn;