import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login&Registration.css'

export default function Registration() {
  const history = useNavigate();

  const [uName, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (email === "" || password === "" || uName === "") {
      alert("Kindly complete the registration form");
    } else if ((email, password, uName)) {
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("UserName", JSON.stringify(uName));
      localStorage.setItem("Password", JSON.stringify(password));
      history("/login", { replace: true });
    } else {
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("Email", JSON.stringify(email));
    localStorage.setItem("UserName", JSON.stringify(uName));
    localStorage.setItem("Password", JSON.stringify(password));
  };

  return (
    <div>
      <form
        className="form-data"
        onSubmit={handleSubmit}
        
      >
        <h1>Register</h1>
       
        <div className="form-inputs" >
          <label>UserName</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter User name"
            onChange={(e) => setUName(e.target.value)}
            required
          />
        </div>
        <div className="form-inputs">
          <label>Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn"
            onClick={handleClick}
          >
            Register
          </button>
          <Link
          className="link"
            to="/login"
          >
            <p>Already registered? Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
