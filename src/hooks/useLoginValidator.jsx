import { useUserStore } from "../store/useUserStore";
import { useErrorStore } from "../store/useErrorStore";
import { useNavigate } from "react-router";
import axios from "axios";

const forbiddenCharsRegex = /[!@#$%^&*()\-_+={}[\];:'"<>,./?\\|]/;

function useLoginValidator() {
  const { userLogin, userPassword } = useUserStore();
  const { setError, clearError } = useErrorStore();
  const navigate = useNavigate();

  return async (e) => {
    e.preventDefault();
    clearError();

    if (userLogin.length < 3 || userPassword.length < 3) {
      setError("Login and password must be at least 3 characters long", true);
      return;
    }
    if (userLogin.length > 20 || userPassword.length > 20) {
      setError("Login and password must be at most 20 characters long", true);
      return;
    }
    if (userLogin.includes(" ") || userPassword.includes(" ")) {
      setError("Login and password must not contain spaces", true);
      return;
    }
    if (
      forbiddenCharsRegex.test(userLogin) ||
      forbiddenCharsRegex.test(userPassword)
    ) {
      setError("Login and password must not contain special characters", true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        login: userLogin,
        password: userPassword,
      });
      console.log(response.data);

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/profile")
      clearError();
    } catch (error) {
      console.error(error);
      setError("Invalid login or password", true);
    }
  };
}

export default useLoginValidator;
