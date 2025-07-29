import React from "react";
import "./OAuthButtons.css";
import googleIcon from "../../assets/icons/google.svg";
import appleIcon from "../../assets/icons/apple.svg";

const OAuthButtons = ({ onGoogleLogin }) => {
  return (
    <div className="oauth-buttons">
      <button className="oauth-btn google-btn" onClick={onGoogleLogin}>
        <img src={googleIcon} alt="Google" />
        Continue with Google
      </button>
      <button className="oauth-btn apple-btn" disabled>
        <img src={appleIcon} alt="Apple" />
        Continue with Apple
      </button>
    </div>
  );
};

export default OAuthButtons;
