import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";
import fs from "fs";
import jwt from 'jsonwebtoken';
import Products from "./models/Products.js";
import User from "./models/Users.js";
import Gazebo from "./models/Gazebo.js";

// Routes
import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use('/uploads/avatars', express.static('uploads/avatars'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join("uploads", "avatars");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${req.userId}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "Secret");
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    await Products.deleteMany({});
    console.log("All existing products deleted");
    const products = [
      {
        title: "Coca-Cola",
        category: "Drinks",
        price: 1.5,
        description: "Another refreshing soda drink",
        imageURL:
          "https://www.coca-cola.com/content/dam/onexp/ua/uk/brands/coca-cola/coca-cola-original_bottle.jpg",
      },
      {
        title: "Pepsi",
        category: "Drinks",
        price: 1.5,
        description: "Another refreshing soda drink",
        imageURL:
          "https://happypen-photos.s3.eu-north-1.amazonaws.com/164560/voda-pepsi-cola-033l-zestyanaya-banka-24stup-pepsi-cola1",
      },
      {
        title: "Fanta",
        category: "Drinks",
        price: 1.5,
        description: "Another refreshing soda drink",
        imageURL:
          "https://www.coca-cola.com/content/dam/onexp/ua/uk/brands/fanta/finals/ua_fanta_prod_750x750_v1.jpg",
      },
      {
        title: "Sprite",
        category: "Drinks",
        price: 1.5,
        description: "Another refreshing soda drink",
        imageURL:
          "https://content.okwine.ua/files/product/61b345346ebb0c2d53db5d52/350x470/3e0a5f45-f3d7-4580-b4f3-bdc4d5c207c5.sprite-pet-0-5l.jpg",
      },
      {
        title: "Mug",
        category: "Souvenirs",
        price: 5.0,
        description: "Mug with cool design",
        imageURL:
          "https://i.etsystatic.com/21639160/r/il/ea6437/5993172501/il_570xN.5993172501_2zj4.jpg",
      },
      {
        title: "T-shirt",
        category: "Souvenirs",
        price: 10.0,
        description: "T-shirt with logo",
        imageURL:
          "https://content2.rozetka.com.ua/goods/images/big/487560525.jpg",
      },
      {
        title: "Toy Car",
        category: "Children items",
        price: 7.0,
        description: "Plastic toy car for kids",
        imageURL: "https://i.ebayimg.com/images/g/6YcAAOSwEcRkkC1L/s-l1200.jpg",
      },
      {
        title: "Puzzle",
        category: "Children items",
        price: 4.0,
        description: "Fun puzzle for kids",
        imageURL:
          "https://www.calendarclub.ca/cdn/shop/files/9AECA490-2F22-46F3-9D62-71D2D572EBE7.jpg?v=1720634727",
      },
    ];

    await Products.insertMany(products);
    console.log("Products inserted");

    await Gazebo.deleteMany({});
    console.log("All existing gazebos deleted");

    const gazebos = [
      {
        title: "Беседка у озера",
        description: "Просторная беседка с видом на озеро",
        capacity: 15,
        hasBarbecue: true,
        hasHeating: false,
        pricePerHour: 1300,
        imageURL: "https://xpark.kyiv.ua/wp-content/uploads/2017/12/1IMG_3608.jpg",
      },
      {
        title: "Семейная беседка",
        description: "Уютная беседка для семейных посиделок",
        capacity: 8,
        hasBarbecue: true,
        hasHeating: false,
        pricePerHour: 2034,
        imageURL: "https://th.bing.com/th/id/R.03e1e913ef8411a89d43b5b3e5bdde66?rik=Xw8oBmHjLpvwLw&pid=ImgRaw&r=0",
      },
      {
        title: "Романтическая беседка",
        description: "Небольшая беседка с декором для двоих",
        capacity: 2,
        hasBarbecue: true,
        hasHeating: true,
        pricePerHour: 2420,
        imageURL: "https://th.bing.com/th/id/R.99cface6572fb0d4307c4a40c1a4b460?rik=Ykhm5C3dPes%2ffQ&riu=http%3a%2f%2fstatic.esosedi.org%2ffiber%2f262433%2ffit%2f1400x1000%2fbesedka_s_mangalom.png&ehk=QqudzeQ6fkD6dQnSyBaxJjnN964idU%2bcpaDAh6DqJTw%3d&risl=&pid=ImgRaw&r=0",
      },
    ];

    await Gazebo.insertMany(gazebos);
    console.log("Gazebos inserted");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.post("/upload-avatar", verifyToken, upload.single("avatar"), async (req, res) => {
  try {
    console.log("User ID from token:", req.userId);

    if (!req.file) {
      return res.status(400).json({ message: "Avatar file is required" });
    }

    const avatarURL = `${req.protocol}://${req.get("host")}/uploads/avatars/${req.file.filename}`;

    const updatedUser = await User.findByIdAndUpdate(
      req.userId, 
      { avatar: avatarURL },
      { new: true }
    );

    if (!updatedUser) {
      fs.unlinkSync(req.file.path);
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Avatar updated", avatar: updatedUser.avatar });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Failed to update avatar" });
  }
});

app.get("/products/:category", async (req, res) => {
  try {
    const categoryMap = {
      drinks: "Drinks",
      souvenirs: "Souvenirs",
      children: "Children items",
    };

    const param = req.params.category.toLowerCase();
    const mappedCategory = categoryMap[param];

    if (!mappedCategory) {
      return res.status(400).json({ error: "Invalid category" });
    }

    const products = await Products.find({ category: mappedCategory });

    if (!products.length) {
      return res
        .status(404)
        .json({ error: "No products found in this category" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/gazebos", async (req, res) => {
  try {
    const gazebos = await Gazebo.find();
    if (!gazebos.length) {
      return res.status(404).json({ error: "No gazebos found" });
    }
    res.status(200).json(gazebos);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch gazebos" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
