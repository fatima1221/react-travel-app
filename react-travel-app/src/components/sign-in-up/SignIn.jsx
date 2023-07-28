import React from "react";
import "./SignInUp.css";
import Input from "./Input";
import Button from "./Button";

const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form className="sign-in-form" autoComplete="off" onSubmit={handleSignIn}>
        <h2 className="sign-in-form__title">Sign In</h2>
        <Input label="Email" type="email" name="email" required />
        <Input
          label="Password"
          type="password"
          name="password"
          autoComplete="new-password"
          required
        />
        <Button label="Sign In" />
      </form>
      <span>
        Don't have an account?
        <a
          data-testid="auth-sign-up-link"
          href="./sign-up.html"
          className="sign-in-form__link"
        >
          Sign Up
        </a>
      </span>
    </main>
  );
};

export default SignIn;
