import { useUserStore } from "../store/useUserStore";
import { useErrorStore } from "../store/useErrorStore";
import axios from "axios";

const forbiddenCharsRegex = /[!@#$%^&*()\-_+={}[\];:'"<>,./?\\|]/;

function useLoginValidator() {
  const { login, password } = useUserStore();
  const { setError, clearError } = useErrorStore();

  return async (e) => {
    e.preventDefault();
    clearError();

    if (login.length < 3 || password.length < 3) {
      setError("Login and password must be at least 3 characters long", true);
      return;
    }
    if (login.length > 20 || password.length > 20) {
      setError("Login and password must be at most 20 characters long", true);
      return;
    }
    if (login.includes(" ") || password.includes(" ")) {
      setError("Login and password must not contain spaces", true);
      return;
    }
    if (forbiddenCharsRegex.test(login) || forbiddenCharsRegex.test(password)) {
      setError("Login and password must not contain special characters", true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login", {
        userlogin: login,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      clearError();
    } catch (error) {
      console.error(error);
      setError("Invalid login or password", true);
    }
  };
}

export default useLoginValidator;
