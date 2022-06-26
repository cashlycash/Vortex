import "../css/login.css";
import { useState } from "react";

const Login = () => {
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  const [error, seterror] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    var { email, pass } = document.forms[0];
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          mail: email,
          pass: pass,
        },
        getCircularReplacer()
      ),
    };
    try {
      fetch("https://vortex-api.cashlycash.repl.co/login", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data.error.status) {
            seterror(data.error.message);
          } else {
            localStorage.setItem("token", data.body.content);
            window.location.href = "/account";
          }
        });
    } catch {
      handleSubmit(event);
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {error && <div className="error">{error}</div>}
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <a href="/register">Dont have a account? Register now!</a>
    </div>
  );
};

export default Login;
