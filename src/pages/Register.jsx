import "../styles/Register.css";
import { Link } from "react-router-dom";
import useRegisterValidator from "../hooks/useRegisterValidator";
import { useErrorStore } from "../store/useErrorStore";
import { useUserStore } from "../store/useUserStore";

import ErrorMessage from "../components/ErrorMessage";

export default function Register() {
  const { login, email, password, repPassword} = useUserStore();
  const { setLogin, setEmail, setPassword,  setRepPassword } = useUserStore();
  const { isError } = useErrorStore();

  const handleSubmit = useRegisterValidator();

  return (
    <div className="register">
      { isError && <ErrorMessage />}
      <form onSubmit={handleSubmit} className="register-form">
        <h1>Register</h1>

        <fieldset>
          <legend>Enter login*</legend>
          <input
           type="text"
           id="login"
           value={login}
           onChange={(e) => setLogin(e.target.value)}
           autoComplete="username"
           required/>
        </fieldset>

        <fieldset>
          <legend>Enter email*</legend>
          <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required/>
        </fieldset>

        <fieldset>
          <legend>Enter password*</legend>
          <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required/>
        </fieldset>

        <fieldset>
          <legend>Repeat password*</legend>
          <input
          type="password"
          id="repeat-password"
          value={repPassword}
          onChange={(e) => setRepPassword(e.target.value)}
          autoComplete="current-password"
          required/>
        </fieldset>

        <Link to="/login">I have an account</Link>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
