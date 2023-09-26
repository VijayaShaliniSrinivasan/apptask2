import React from "react";
import './Home.css';
import './Login.css'; // Import the CSS file

function Login() {
  return (
    <>
      <div className="login-section">
        <div className="container">
          <div className="header">
            <h1>Login</h1>
            <div className="inputs">
              <label htmlFor="loginId">Login-Id</label>
              <input type="text" id="loginId" placeholder="Enter your Login-Id" />
            </div>

            <div className="inputs">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your Password" />
            </div>

            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
