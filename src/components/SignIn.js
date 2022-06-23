import React from "react";
import { useNavigate } from "react-router-dom";
import { SignUpContainer, SignUpForm, Input, Button, Pswitch } from "../styles/styles";

const SignIn = ({ handleView, setIsLogged }) => {
    const Navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLogged(true);
        Navigate("/");
    }
    return (
        <SignUpContainer>
        <SignUpForm onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <Button>Sign In</Button>
            <Pswitch>
                Don't have an account?
                <button onClick={() => handleView(2)}>Go to Sign Up</button>
            </Pswitch>
        </SignUpForm>
        </SignUpContainer>

    )
}

export default SignIn;