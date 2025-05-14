import mongoose from "mongoose";

const gazeboSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  capacity: { type: Number, required: true },
  hasBarbecue: { type: Boolean, default: false },
  hasHeating: { type: Boolean, default: false },
  pricePerHour: { type: Number, required: true },
  imageURL: { type: String, required: true }
});

const Gazebo = mongoose.model("Gazebo", gazeboSchema);

export default Gazebo;