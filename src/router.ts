import path from "node:path";
import { Router } from "express";
import multer from "multer";
import { createCategory } from "./app/models/useCases/categories/createCategory";
import { listCategories } from "./app/models/useCases/categories/listCategories";
import { createProduct } from "./app/models/useCases/products/createProduct";
import { listProducts } from "./app/models/useCases/products/listProducts";
import { listProductsByCategory } from "./app/models/useCases/categories/listProductsByCategory";
import { deleteProduct } from "./app/models/useCases/products/deleteProduct";
import { listOrders } from "./app/models/useCases/orders/listOrders";
import { createOrder } from "./app/models/useCases/orders/createOrder";
import { changeOrderStatus } from "./app/models/useCases/orders/changeOrderStatus";
import { cancelOrder } from "./app/models/useCases/orders/cancelOrder";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "../..", "uploads"));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get("/categories", listCategories);
// Create category
router.post("/categories", createCategory);
// List products
router.get("/products", listProducts);
// Create product
router.post("/products", upload.single("image"), createProduct);
// Get products by category
router.get("/categories/:categoryId/products", listProductsByCategory);
// Delete product
router.delete("/products/:id", deleteProduct);
// List orders
router.get("/orders", listOrders);
// Create order
router.post("/orders", createOrder);
// Change order status
router.patch("/orders/:orderId", changeOrderStatus);
// Delete / cancel order
router.delete("/orders/:orderId", cancelOrder);
