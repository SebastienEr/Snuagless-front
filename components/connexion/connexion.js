import styles from '.connexion.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/users';
import Link from 'next/link';

function Signup() {
    const [isOpenSignIn, setIsOpenSignIn] = useState(false);
    const [isOpenSignUp, setIsOpenSignUp] = useState(false);
    const [formDataSignIn, setFormDataSignIn] = useState({ 
      firstName: '',
      lastName: '',
      password: ''
    });
  
  
    const [formDataSignUp, setFormDataSignUp] = useState({ 
      username: '',
      password: ''
    });

    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
  
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpFirstname, setSignUpFirstname] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
  
    
  
    const handleRegister = () => {
      fetch('ROUTE DU FETCH DEMANDER VÉRIF À SEB LE PRO DU BACKEND', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: signUpUsername, firstname: signUpFirstname, password: signUpPassword }),
      }).then(response => response.json())
          .then(data => {
              if (data.result===true) {
                  dispatch(login({ username: signUpUsername, token: data.token }));
                  router.push('/home');
              } else {
                  console.error('Echec')
              }
          });
  };
  
  const handleConnection = () => {
  
      fetch('ROUTE DU FETCH DEMANDER VÉRIF À SEB LE PRO DU BACKEND', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: signInUsername, password: signInPassword }),
      }).then(response => response.json())
          .then(data => {
              if (data.result===true) {
                  dispatch(login({ username: signInUsername, token: data.token }));
                  router.push('/home');
              } else {
                  console.error('Echec')
              }
          });
  };
  
    
    let userSection;
    if (!user.isConnected) {
        userSection = (
            <div className={styles.connect}>
              <p>Already member?</p>
              <button className={styles.signup} onClick={() => setIsOpenSignUp(true)}>Sign in</button>
              {isOpenSignUp && (
                <div className={styles.modal}>
                  <div className="modal-content">
                    <span className="close" onClick={() => setIsOpenSignUp(false)}>&times;</span>
                    <h2>Sign up</h2>
                    <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
                    <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
                    <button id="connection" onClick={() => handleConnection()}>Sign In</button>
                  </div>
                </div>
              )}
            </div>
        );
    }
  
    return (
      <div>
        <main className={styles.main}>
    
  
          <div className={styles.right}>
            <h1 className={styles.title}>
              Register now
            </h1>
                  <div className={styles.inputs}>
                  <input className={styles.firstname} type="text" placeholder="Firstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
                  <input className={styles.username} type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
                  <input className={styles.password} type="password" placeholder="Password" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
                  <button className={styles.signupbtn} onClick={handleRegister}>Sign Up</button>
                  </div>         
              {userSection}           
          </div>
        </main>
      </div>
    );
}

export default Signup;
