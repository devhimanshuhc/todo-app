import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login&Registration.css";

export default function Login() {
  const history = useNavigate();
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");

  //getting data from ls
  const handleLogin = (e) => {
    e.preventDefault();
    const mail = JSON.parse(localStorage.getItem("Email"));
    const pass = JSON.parse(localStorage.getItem("Password"));
    console.log(mail);
    console.log(pass);
    if (passwordLog !== pass || emailLog !== mail) {
      alert("You entered wrong Email or Password");
    } else if (passwordLog === "" || emailLog === "") {
      alert("Please Fill up the details");
    } else {
      history("/home", { replace: true });
    }
  };

  return (
    <div>
      <form className="form-data" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="form-inputs">
          <label>Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter Email"
            onChange={(e) => setEmailLog(e.target.value)}
            required
          />
        </div>
        <div className="form-inputs">
          <label>Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Enter Password"
            pattern=".{6,}"
            onChange={(e) => setPasswordLog(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn" onClick={handleLogin}>
          Login
        </button>
        <Link className="link" to="/">
          <p>Create Account</p>
        </Link>
      </form>
    </div>
  );
}
