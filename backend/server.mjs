// -_-
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// IMPORTERA ROUTES HÄR
import products from "./routes/products-route.mjs";

dotenv.config();

// instansiera express
const app = express();

// importera PORT
const PORT = process.env.PORT || 8008;

// Plug in middleware
app.use(express.json());
app.use(cors());

// sökväg för MITT api
app.use("/products", products);

app.listen(PORT, () =>
  console.log("Server started and listening to port: ", PORT)
);
