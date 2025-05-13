import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  avatar: { type: String, default: "" },
  name: { type: String, default: "" },
  description: { type: String, default: "" },
  login: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema); 
