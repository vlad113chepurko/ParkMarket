require("dotenv").config({ path: "./backend/.env" });
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const productFilterRoutes = require("./routes/product-filter");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.use("/auth", authRoutes);
app.use("/products/filter", productFilterRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
