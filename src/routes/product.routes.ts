import express from "express";
import {
  getAllGenderProductsHandler,
  getAllProductsHandler,
  getCurrentProductHandler,
} from "../controller/product.controller";

const router = express.Router();

router.get("/api/products", getAllProductsHandler);
router.get("/api/product/:id", getCurrentProductHandler);
router.get("/api/products/:gender", getAllGenderProductsHandler);
// router.put("/api/products/:productId", [requireUser, validateResource(updateProductSchema)], updateProductHandler);
// router.delete("/api/products/:productId", [requireUser, validateResource(deleteProductSchema)], deleteProductHandler);

export default router;
