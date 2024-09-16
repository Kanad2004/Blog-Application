import React, { useEffect, useState } from "react";
import "./Header.css";
import { json, Link } from "react-router-dom";

const Header = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  async function logout() {
    await fetch("http://localhost:8000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new Post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}

        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
