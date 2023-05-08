import dotenv from "dotenv";

import connectDB from "./database.js";
import express from "express";

// Import the routes
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;


app.use("/api/products", productRoutes);








app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
