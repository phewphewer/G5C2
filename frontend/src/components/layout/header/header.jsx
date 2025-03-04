import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function header({ isOpen }) {
  return (
    <div>
      <header className={`header ${isOpen ? "shifted" : ""}`}>
        <h1 className="droplet-text">DROPLET</h1>
        <div className="auth-buttons gap-6">
          <button className="login">
            <Link to="./auth/login">Log-in</Link>
          </button>
          <button className="register">
            <Link to="./auth/sign_up">Register</Link>
          </button>
        </div>
      </header>
    </div>
  );
}
