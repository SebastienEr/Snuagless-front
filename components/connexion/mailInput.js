import React from 'react';

function MailInput ({value, onChange, required}){
    const handleChange = (e) => {
        const email=e.target.value;
        const isValidMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (isValidMail || email === ''){
            onChange(email);
        } 
    };

    return (
        <div className={styles.inputBox}>
          <input
            type="email"
            required={required}
            onChange={handleChange}
            value={value}
          />
          <label>Email</label>
        </div>
      );
}

export default MailInput;