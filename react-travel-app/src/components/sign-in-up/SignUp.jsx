import React from "react";
import "./SignInUp.css";
import { Link } from "react-router-dom";

import Input from "../common/input/Input";
import Button from "../common/button/Button";

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSignUp}>
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label class="input">
          <span class="input__heading">Full name</span>
          <Input
            dataTestId="auth-full-name"
            type="text"
            name="full-name"
            required={true}
          />
        </label>
        <label class="input">
          <span class="input__heading">Email</span>
          <Input
            dataTestId="auth-email"
            type="email"
            name="email"
            required={true}
          />
        </label>
        <label class="input">
          <span class="input__heading">Password</span>
          <Input
            dataTestId="auth-password"
            type="password"
            name="password"
            required={true}
          />
        </label>

        <Button label="Sign Up" />
      </form>
      <span>
        Already have an account?
        <Link to="/sign-in" className="sign-in-form__link">
          Sign In
        </Link>
      </span>
    </main>
  );
};

export default SignUp;
