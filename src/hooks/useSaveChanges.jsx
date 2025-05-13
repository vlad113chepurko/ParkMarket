import { useUserStore } from "../store/useUserStore";
import { useSaveStore } from "../store/useSaveStore";

export const useSaveChanges = () => {
  const { setIsSave } = useSaveStore();
  const { userName, userDescription, userAvatar } = useUserStore();

  const handleSave = () => {
    const userData = {
      userName,
      userDescription,
      userAvatar,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    console.debug("Data is saved to localStorage");

    setIsSave(false); 
  };

  return handleSave;
};
