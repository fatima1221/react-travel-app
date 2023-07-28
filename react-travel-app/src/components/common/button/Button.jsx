import React from "react";
import "./Button.css";
const Button = ({ label, onClick }) => {
  return (
    <button data-testid="auth-submit" className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
