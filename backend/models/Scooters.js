import mongoose from "mongoose";

const scooterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  maxSpeed: { type: Number, required: true },
  batteryRange: { type: Number, required: true },
  hasHelmet: { type: Boolean, default: false },
  pricePerHour: { type: Number, required: true },
  imageURL: { type: String },
});

const Scooter = mongoose.model("Scooter", scooterSchema);

export default Scooter;