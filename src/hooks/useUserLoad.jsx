import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";

export const useLoadUser = () => {
  const { setUser } = useUserStore();

  useEffect(() => {
    const token = sessionStorage.getItem("item");

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = response.json();

        if (!response.ok) {
          console.error("Error with get user: ", response.message);
          return;
        } else {
          setUser(result.user);
        }

      } catch (err) {
        console.error("Error with server:", err);
      }
    };
    fetchData()
  }, [setUser]);
};
