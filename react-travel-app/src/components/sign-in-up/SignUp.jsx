import React from "react";
import "./SignInUp.css";
import Input from "./Input";
import Button from "./Button";

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
        <Input label="Full name" type="text" name="full-name" required />
        <Input label="Email" type="email" name="email" required />
        <Input
          label="Password"
          type="password"
          name="password"
          autoComplete="new-password"
          required
        />
        <Button label="Sign Up" />
      </form>
      <span>
        Already have an account?
        <a
          data-testid="auth-sign-in-link"
          href="./sign-in.html"
          className="sign-up-form__link"
        >
          Sign In
        </a>
      </span>
    </main>
  );
};

export default SignUp;
