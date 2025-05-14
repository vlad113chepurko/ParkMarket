import React from "react";
import "../styles/pages/Login.css";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { useErrorStore } from "../store/useErrorStore";
import useLoginValidator from "../hooks/useLoginValidator";
import ErrorMessage from "../components/ErrorMessage";

export default function Login() {
  const { userLogin, userPassword } = useUserStore();
  const { setLogin, setPassword } = useUserStore();
  const { isError } = useErrorStore();

  const handleSubmit = useLoginValidator();

  return (
    <div className="login">
      {isError && <ErrorMessage />}
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <fieldset>
          <legend>Enter login*</legend>
          <input
            type="text"
            id="login"
            onChange={(e) => setLogin(e.target.value)}
            value={userLogin}
            autoComplete="username"
            required
          />
        </fieldset>
        <fieldset>
          <legend>Enter password*</legend>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={userPassword}
            autoComplete="current-password"
            required
          />
        </fieldset>

        <Link to="/auth/register">I don't have an account</Link>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
