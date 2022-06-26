import { useState } from "react";
import "../css/acc.css";
import Userpfp from "../images/pfp.jpeg";

const Account = () => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  if (!token) {
    window.location.href = "/login";
  }
  fetch(`https://vortex-api.cashlycash.repl.co/userinfo/${token}`)
    .then((r) => r.json())
    .then((d) => {
      const u = d.body.content;
      if (!u) {
        localStorage.removeItem("token");
      }
      setUser(u);
    });
  return (
    <div className="c">
      {user && (
        <div className="information">
          <div className="pfp">
            <img src={Userpfp} className="pfp-img" />
          </div>
          <br />
          <div className="user-info">
            <p>
              Hello there, <u>{user.info.name}</u>
            </p>
            <p>
              <b>Username: </b>
              {user.info.username}
            </p>
            <p>
              <b>Email: </b> {user.mail}
            </p>
            <p>
              <b>Your Balance: </b> {user.info.bal}
            </p>
          </div>
        </div>
      )}
      {!user && (
        <div className="information">
        <div className="pfp">
          <img src={Userpfp} className="pfp-img" />
        </div>
        <br />
        <div className="user-info">
          <p>
            Hello there, <u>Loading...</u>
          </p>
          <p>
            <b>Username: </b>
            Loading...
          </p>
          <p>
            <b>Email: </b> Loading...
          </p>
          <p>
            <b>Your Balance: </b> Loading...
          </p>
          <p>
            <u>LOGOUT</u>
          </p>
        </div>
      </div>
      )}
    </div>
  );
};

export default Account;
