import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";

export const useLoadUser = () => {
  const { setUser, userName, userDescription, userAvatar } =
    useUserStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile/getUser", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const result = await response.json();
          console.error("Error with get user: ", result.message);
          return;
        }

        const result = await response.json();
        console.log("Fetched user:", result);

        setUser(result);
      } catch (err) {
        console.error("Error with server:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setUser]);

  return isLoading;
};
