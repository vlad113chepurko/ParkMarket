import "../styles/Register.css";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/BreadCrumps";
export default function Register() {
  return (
    <div className="register">
      <Breadcrumbs />
      <form className="register-form">
        <h1>Register</h1>

        <fieldset>
          <legend>Enter login*</legend>
          <input type="text" id="login" />
        </fieldset>

        <fieldset>
          <legend>Enter email*</legend>
          <input type="email" id="email" />
        </fieldset>

        <fieldset>
          <legend>Enter password*</legend>
          <input type="password" id="password" />
        </fieldset>

        <fieldset>
          <legend>Repeat password*</legend>
          <input type="password" id="repeat-password" />
        </fieldset>

        <Link to="/login">I have an account</Link>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
