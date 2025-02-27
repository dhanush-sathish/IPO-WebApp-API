import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="logo">BLUESTOCK</h2>
        <h3>Forgot Password?</h3>
        <p>Enter your email address to get the password reset link.</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="hello@bluestock.in"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Password Reset</button>
        </form>

        <a href="/login" className="back-to-login">
          Back to login
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
