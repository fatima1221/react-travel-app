import React from "react";
import "./SignInUp.css";
import { Link } from "react-router-dom";

import Input from "../common/input/Input";
import Button from "../common/button/Button";

const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
  };

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off" onSubmit={handleSignIn}>
        <h2 className="sign-in-form__title">Sign In</h2>
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

        <Button label="Sign In" />
      </form>
      <span>
        Don't have an account?
        <Link to="/sign-up" className="sign-in-form__link">
          Sign Up
        </Link>
      </span>
    </main>
  );
};

export default SignIn;
