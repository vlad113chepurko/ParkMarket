import "../styles/Register.css";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <Link to="/login">I have an account</Link>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
