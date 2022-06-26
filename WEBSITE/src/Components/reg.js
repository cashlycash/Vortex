import "../css/login.css";
import { useState } from "react";

const Reg = () => {
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
    var { email, pass, username, name } = document.forms[0].elements;
    const body = JSON.stringify(
      {
        mail: email.value,
        pass: pass.value,
        username: username.value,
        name: name.value,
      },
      getCircularReplacer()
    );
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    };
    try {
      fetch("https://vortex-api.cashlycash.repl.co/reg", requestOptions)
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
          <label>Username </label>
          <input type="username" name="username" required />
        </div>
        <div className="input-container">
          <label>Fullname </label>
          <input type="name" name="name" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <a href="/login">Already have a account? Login now!</a>
    </div>
  );
};

export default Reg;
