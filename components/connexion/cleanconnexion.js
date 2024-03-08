import React, {useState} from 'react';
import styles from "../connexion/connexion.module.css";
import SignIn from './SignIn'; // connexion (compte existant)
import SignUp from './SignUp'; // inscription
import Link from "next/link";


const Connexion =() => {
    const [isSignInVisible, setIsSignInVisible] = useState(true); // pour faire apparaître signin en premier
    const toggleConnexionForm = () => {
        setIsSignInVisible(!isSignInVisible); // inverser true false pour toggle connexion/inscription
    };

return (
    <main className={styles.main}>
        <div className={styles.form}>
           <h1 className={styles.title}>{isSignInVisible ? "CONNEXION" : "INSCRIPTION"}</h1>
           <div>     
               {isSignInVisible ? (<SignIn/>) : (<SignUp/>)}   {/* Si isSignInVisible = true alors render component SignIn, sinon SignUp */}
               <button onClick={toggleConnexionForm}>
                   {isSignInVisible ? "Vous n'avez pas de compte?": "Déjà inscrit?"} {/* Si isSignInVisible = true alors render "pas de compte?", sinon "déjà inscrit" */}
               </button>
            </div>
            <Link className={styles.guestmode} href="/">Rester en mode invité</Link>
        </div>
    </main>
)

}

export default Connexion;