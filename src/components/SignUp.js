import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpContainer,
  SignUpForm,
  Pswitch,
  LabelCheckbox,
  Input,
  Button,
} from "../styles/styles";

const SignUp = ({ handleView, setIsLogged }) => {
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogged(true);
    Navigate("/");
  };
  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
          <Input type="text" required placeholder="Username" />
          <Input type="password" required placeholder="Password" />
          <Input type="email" required placeholder="E-mail" />
        <LabelCheckbox>
          <input type="checkbox" required /> I read and agree to the Terms and Conditions
        </LabelCheckbox>
        <Button>Create Account</Button>
        <Pswitch>
          Already have an account?
          <button onClick={() => handleView(1)}> Sign In </button>{" "}
        </Pswitch>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
