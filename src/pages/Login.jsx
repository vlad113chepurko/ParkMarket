import "../styles/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <form className="login-form">
        <h1>Login</h1>
        <fieldset>
          <legend>Enter login*</legend>
          <input type="text" id="login" name="login" />
        </fieldset>
        <fieldset>
          <legend>Enter password*</legend>
          <input type="password" id="password" name="password" />
        </fieldset>

        <Link to="/register">I don't have an account</Link>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
