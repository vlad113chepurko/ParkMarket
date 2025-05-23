import { useUserStore } from "../store/useUserStore";
import { useSaveStore } from "../store/useSaveStore";

export const useSaveChanges = () => {
  const { setIsSave } = useSaveStore();
  const { userName, userDescription, userAvatar, setCompleted, setUser } =
    useUserStore();

  const handleSave = async () => {
    const token = sessionStorage.getItem("token");

    const userData = {
      name: userName,
      description: userDescription,
      avatar: userAvatar,
    };

    try {
      const response = await fetch("http://localhost:3000/profile/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (!response.ok) {
        console.error("Error with update profile: ", result.message);
        return;
      }
      console.log("Response data:", result.user);

      setUser(result.user);

      let count = 0;
      if (userName) count++;
      if (userDescription) count++;
      if (userAvatar) count++;
      setCompleted(count);
    } catch (err) {
      console.error(err);
    }

    console.debug("Data is saved to localStorage");

    setIsSave(false);
  };

  return handleSave;
};
