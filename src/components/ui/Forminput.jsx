import React from "react";
import "./FormInput.css";

const FormInput = ({ label, type = "text", ...props }) => {
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type={type} {...props} />
    </div>
  );
};

export default FormInput;
