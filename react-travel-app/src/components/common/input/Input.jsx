import React from "react";
import "./Input.css";

const Input = ({ dataTestId, type, name, placeholder, required }) => {
  return (
    <input
      data-test-id={dataTestId}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
