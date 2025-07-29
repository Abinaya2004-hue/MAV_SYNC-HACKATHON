import React from "react";
import "./PasswordStrengthMeter.css";

const PasswordStrengthMeter = ({ password }) => {
  const calculateStrength = () => {
    if (!password) return "Weak";
    if (password.length > 8) return "Strong";
    if (password.length > 5) return "Medium";
    return "Weak";
  };

  return (
    <div className="password-strength-meter">
      Strength: <strong>{calculateStrength()}</strong>
    </div>
  );
};

export default PasswordStrengthMeter;
