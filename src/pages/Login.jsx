import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";
import { useErrorStore } from "../store/useErrorStore";
import useLoginValidator  from "../hooks/useLoginValidator";
import ErrorMessage from "../components/ErrorMessage";

export default function Login() {
  const { login, password } = useUserStore();
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
            value={login}
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
            value={password}
            autoComplete="current-password"
            required
          />
        </fieldset>

        <Link to="/register">I don't have an account</Link>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
