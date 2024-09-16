import React, { useState } from "react";
import "./Login.css";
import { Navigate } from "react-router-dom";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setDirect] = useState(false);

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      setDirect(true);
    } else {
      alert("Wrong credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => {
          setUsername(ev.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
