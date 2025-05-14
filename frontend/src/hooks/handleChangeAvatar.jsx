import { useSaveStore } from "../store/useSaveStore";
import { useUserStore } from "../store/useUserStore";

export default async function handleChangeAvatar(e) {
  const { setIsSave } = useSaveStore.getState();
  const { setUserAvatar, userAvatar } = useUserStore.getState();

  setIsSave(true);
  console.debug("Files:", e?.target?.files);

  const file = e.target?.files?.[0];
  if (!file) {
    console.error("No file selected");
    return;
  }

  const tempUrl = URL.createObjectURL(file);
  setUserAvatar(tempUrl);

  const formData = new FormData();
  formData.append("avatar", file);

  const token = sessionStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:3000/upload-avatar", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      console.error("Failed to upload avatar");
      return;
    }

    const result = await response.json();
    console.debug("Update result: ", result);

    setUserAvatar(result.avatar);
    URL.revokeObjectURL(tempUrl);
  } catch (err) {
    console.error("Upload error:", err);
  }
}
