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
import Gazebo from "./models/Gazebos.js";
import Bicycle from "./models/Bicycles.js";
import Scooter from "./models/Scooters.js";

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

    await Bicycle.deleteMany({});
    console.log("All existing bicycles deleted");

    const bicycles = [
      {
        title: "Горный велосипед Trek",
        description: "Отличный вариант для поездок по пересечённой местности",
        type: "Mountain",
        gearCount: 21,
        hasBasket: false,
        pricePerHour: 150,
        imageURL: "https://www.bikethesites.com/wp-content/uploads/2023/02/Trek-Vs-Specialized-Bikes-1.png",
      },
      {
        title: "Городской велосипед",
        description: "Удобный велосипед для долгих прогулок",
        type: "Hybrid",
        gearCount: 7,
        hasBasket: true,
        pricePerHour: 100,
        imageURL: "https://images.fravega.com/f1000/7b9d87e2cd6b924f50a81a012d693bb0.jpg",
      },
      {
        title: "Электровелосипед Xiaomi",
        description: "Электровелосипед с мощной батареей",
        type: "Electric",
        gearCount: 5,
        hasBasket: false,
        pricePerHour: 300,
        imageURL: "https://th.bing.com/th/id/OIP.W6Nk-tEMbbMKCE_RC8sjrgHaE6?cb=iwp2&w=1188&h=788&rs=1&pid=ImgDetMain",
      },
      {
        title: "Шоссейный велосипед Bianchi",
        description: "Быстрый и лёгкий велосипед",
        type: "Road",
        gearCount: 18,
        hasBasket: false,
        pricePerHour: 200,
        imageURL: "https://th.bing.com/th/id/R.414a145ee130550dda2d574c4d102ff1?rik=oHwzgPFEeQW8RA&riu=http%3a%2f%2fcykl.cz%2fimages%2fzpravy%2fBianchi%2fvertigo_carbon%2fbianchi_vertigo.jpg&ehk=fl1ZB%2be1TJnzWfSyNVJ2ry9aIANdClZEDf6hPdMi0es%3d&risl=&pid=ImgRaw&r=0",
      }
    ];

    await Bicycle.insertMany(bicycles);
    console.log("Bicycles inserted");

    await Scooter.deleteMany({});
    console.log("All existing scooters deleted");

    const scooters = [
      {
        title: "Xiaomi Mi Electric Scooter",
        description: "Складной электросамокат с запасом хода до 30 км",
        maxSpeed: 25,
        batteryRange: 30,
        hasHelmet: true,
        pricePerHour: 250,
        imageURL: "https://xiaomiplanet.sk/wp-content/uploads/2020/03/xiaomi-mi-electric-scooter-xiaomiplanet-foto-cover.jpg",
      },
      {
        title: "Segway Ninebot",
        description: "Мощный самокат с хорошей амортизацией",
        maxSpeed: 30,
        batteryRange: 40,
        hasHelmet: false,
        pricePerHour: 430,
        imageURL: "https://th.bing.com/th/id/OIP.Src0lZrJ8PW2TraAYOaNWQHaHa?cb=iwp2&w=1500&h=1500&rs=1&pid=ImgDetMain",
      },
      {
        title: "Kugoo S3 Pro",
        description: "Бюджетный вариант с дальностью 25 км",
        maxSpeed: 30,
        batteryRange: 25,
        hasHelmet: false,
        pricePerHour: 265,
        imageURL: "https://th.bing.com/th/id/R.38675f0149ae823929579ffd0b61cf54?rik=84YjIgvJy0Q5rA&pid=ImgRaw&r=0",
      },
      {
        title: "Dualtron Mini",
        description: "Продвинутый самокат с двойным приводом и дальностью 50 км",
        maxSpeed: 45,
        batteryRange: 50,
        hasHelmet: true,
        pricePerHour: 600,
        imageURL: "https://th.bing.com/th/id/OIP.wb0S80dYdC2CNlAZm_LWrwAAAA?cb=iwp2&pid=ImgDet&w=452&h=584&rs=1",
      }
    ];

    await Scooter.insertMany(scooters);
    console.log("Scooters inserted");
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

app.get("/order/gazebos", async (req, res) => {
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

app.get("/order/bike", async (req, res) => {
  try {
    const bicycles = await Bicycle.find();
    if (!bicycles.length) {
      return res.status(404).json({ error: "No bicycles found" });
    }
    res.status(200).json(bicycles);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch bicycles" });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
