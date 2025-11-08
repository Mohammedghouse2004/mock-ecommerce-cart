import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import db from "./db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => res.send("Mock E-Com Backend Running"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));