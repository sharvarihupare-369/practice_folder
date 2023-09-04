import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/authentication/action";
import { useSearchParams } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const auth = useSelector(store=>store.authReducer.isAuth)
  const err = useSelector(store=>store.authReducer.isError)
  const handleLogin = (e) => {
    e.preventDefault();
    let userData = {
      email,
      password,
    };
    dispatch(login(userData))
  };

  return (
    <WRAPPER auth={`${auth}`} iserror={`${err}`}>
    <h1>{auth ? "Login Successfull!" : "Login To Continue!"}</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </WRAPPER>
  );
};

export default Login;

const WRAPPER = styled.div`
  h1{
    color : ${({auth})=> auth === "true" ? "green" : "red" }
  }
  input{
    border : ${({iserror})=> iserror === "true" ? "1px solid red" : "1px solid gray" }
  }
  form {
    width: 400px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input {
    height: 40px;
  }
   button: {
    height: 35px;
  }
`;
