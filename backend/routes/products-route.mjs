// -_-
import express from "express";
import {
  getAllProducts,
  getProduct,
} from "../controllers/products-controller.mjs";
// importera generisk fetchData funktion från utilities

// definera router
const router = express.Router();

// set up routes
router.route("/").get(getAllProducts);
router.route("/:id").get(getProduct);

export default router;
