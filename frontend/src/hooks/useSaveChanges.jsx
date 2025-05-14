import { useUserStore } from "../store/useUserStore";
import { useSaveStore } from "../store/useSaveStore";

export const useSaveChanges = () => {
  const { setIsSave } = useSaveStore();
  const { userName, userDescription, userAvatar, setCompleted } =
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
      console.log("Updated user: ", response.user);
      let count = 0;
      if (result.name?.trim()) count++;
      if (result.description?.trim()) count++;
      if (result.avatar?.trim()) count++;
      setCompleted(count);
    } catch (err) {
      console.error(err);
    }

    console.debug("Data is saved to localStorage");

    setIsSave(false);
  };

  return handleSave
};
