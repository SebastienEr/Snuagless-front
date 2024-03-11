import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from "../connexion/connexion.module.css";


function PasswordCheck({password}) {
    const [validations, setValidations] = useState({
      capital: false,
      number: false,
      specialChar: false,
      moreThan8: false
});

useEffect(() => {
  textChange(password);
}, [password]);

const textChange = (value) => {
  setValidations({
    capital: /[A-Z]/.test(value),
    number: /[0-9]/.test(value),
    specialChar: /[!@#$%^&*]/.test(value),
    moreThan8: (value?.length ?? 0) >= 8
  });
};

  //   useEffect(()=>{
  //       textChange(password);
  //   }, [password]);
    
  //   const valid = (item) =>{
  //     setValidations(prevState => ({
  //       ...prevState,
  //       [item]:true
  //     }))
  //   }

  //   const invalid = (item) => {
  //     setValidations(prevState => ({
  //       ...prevState,
  //       [item]: false
  //     }))
  //   }

  //   const textChange =(value) =>{
  //     if (value && value.match(/[A-Z]/) !== null)
  //     valid('capital');
  // else
  //     invalid('capital');

  // if (value && value.match(/[0-9]/) !== null)
  //     valid('number');
  // else
  //     invalid('number');

  // if (value && value.match(/[!@#$%^&*]/) !== null)
  //     valid('specialChar');
  // else
  //     invalid('specialChar');

  // if (value && value.length >= 8)
  //     valid('moreThan8');
  // else
  //     invalid('moreThan8');
  //   };


    // const handleInputChange = (event) => {
    //   setPassword(event.target.value);
    //   textChange(event.target.value);
    // };
  
    // const valid = (item, validIcon, invalidIcon) => {
    //   const text = document.querySelector(`#${item}`);
    //   text.style.opacity = "1";
    //   const validIcons = document.querySelector(`#${item} .${validIcon}`);
    //   validIcons.style.opacity = '1';
    //   const invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
    //   invalidIcons.style.opacity = "0";
    // };
  
    // const invalid = (item, validIcon, invalidIcon) => {
    //   const text = document.querySelector(`#${item}`);
    //   text.style.opacity = "0.5";
    //   const validIcons = document.querySelector(`#${item} .${validIcon}`);
    //   validIcons.style.opacity = '0';
    //   const invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
    //   invalidIcons.style.opacity = "1";
    // };
  
    // const textChange = (value) => {
    //   if (value.match(/[A-Z]/) !== null)
    //     valid('capital', 'fa-check', 'fa-times');
    //   else
    //     invalid('capital', 'fa-check', 'fa-times');
  
    //   if (value.match(/[0-9]/) !== null)
    //     valid('number', 'fa-check', 'fa-times');
    //   else
    //     invalid('number', 'fa-check', 'fa-times');
  
    //   if (value.match(/[!@#$%^&*]/) !== null)
    //     valid('special-char', 'fa-check', 'fa-times');
    //   else
    //     invalid('special-char', 'fa-check', 'fa-times');
  
    //   if (value.length >= 8)
    //     valid('more-than-8', 'fa-check', 'fa-times');
    //   else
    //     invalid('more-than-8', 'fa-check', 'fa-times');
    // };

    return (

      <div className={styles.container}>
            <div className={styles.validator}>
                <p id="capital" className={validations.capital ? styles.valid : ''}>
                    {validations.capital ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />
}
                    <span> 1 majuscule</span>
                </p>
                <p id="special-char" className={validations.specialChar ? styles.valid : ''}>
                    {validations.specialChar ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />
}
                    <span> 1 caractère spécial</span>
                </p>
                <p id="number" className={validations.number ? styles.valid : ''}>
                    {validations.number ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />
}
                    <span> 1 chiffre</span>
                </p>
                <p id="more-than-8" className={validations.moreThan8 ? styles.valid : ''}>
                    {validations.moreThan8 ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />
}
                    <span> 8 caractères minimum </span>
                </p>
            </div>
        </div>

        // <div className="container">
        //   <div className="formbox">
        //     <div className="inner"></div>
        //     <div><i className="fas fa-lock"></i></div>
        //     <div>
        //       <input
        //         type={showPassword ? "text" : "password"}
        //         placeholder="Password"
        //         id="myPass"
        //         value={password}
        //         onChange={handleInputChange}
        //         required
        //       />
        //     </div>
           
        //   </div>
        //   <div className="validator">
        //     <p id="capital">
        //       <i className="fas fa-times"></i>
        //       <i className="fas fa-check"></i>
        //       <span>Upper Case</span>
        //     </p>
        //     <p id="special-char">
        //       <i className="fas fa-times"></i>
        //       <i className="fas fa-check"></i>
        //       <span>Special Character</span>
        //     </p>
        //     <p id="number">
        //       <i className="fas fa-times"></i>
        //       <i className="fas fa-check"></i>
        //       <span>Number</span>
        //     </p>
        //     <p id="more-than-8">
        //       <i className="fas fa-times"></i>
        //       <i className="fas fa-check"></i>
        //       <span>More than 8 characters</span>
        //     </p>
        //   </div>
        // </div>
      );
}

export default PasswordCheck;