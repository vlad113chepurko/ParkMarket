import mongoose from "mongoose";

const bicycleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ["Mountain", "Road", "Hybrid", "Electric"], required: true },
  gearCount: { type: Number },
  hasBasket: { type: Boolean, default: false },
  pricePerHour: { type: Number, required: true },
  imageURL: { type: String, required: true }
});

const Bicycle = mongoose.model("Bicycle", bicycleSchema);

export default Bicycle;