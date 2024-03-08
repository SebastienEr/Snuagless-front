

import React from 'react';

const ResetPasswordPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    alert('Reset password request sent for email: ' + event.target.email.value);
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
