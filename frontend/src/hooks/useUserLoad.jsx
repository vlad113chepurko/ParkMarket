import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";

export const useLoadUser = () => {
  const { setUser, setCompleted } = useUserStore();
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
        let count = 0;
        if (result.name?.trim()) count++;
        if (result.description?.trim()) count++;
        if (result.avatar?.trim()) count++;
        setCompleted(count);
      } catch (err) {
        console.error("Error with server:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setUser, setCompleted]);

  return isLoading;
};
