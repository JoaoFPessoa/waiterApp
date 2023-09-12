import { Router, Request, Response } from "express";
import { listCategories } from "./useCases/categories/listCategories";
import { createCategory } from "./useCases/categories/createCategory";
import { listProducts } from "./useCases/products/listProducts";
import { createProduct } from "./useCases/products/createProduct";
import path from "node:path";
import multer from "multer";
import { listProductByCategory } from "./useCases/categories/listProductByCategory";
import { createOrder } from "./useCases/orders/createOrder";
import { listOrders } from "./useCases/orders/listsOrders";
import { changeOrderStatus } from "./useCases/orders/changeOrderStatus";
import { removeOrder } from "./useCases/orders/removeOrder";

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

// list categories

router.get("/categories", listCategories);
// create category

router.post("/categories", createCategory);

// list products

router.get("/products", listProducts);

// create product

router.post("/products", upload.single("image"), createProduct);

// get product by category

router.get("/categories/:categoryId/products", listProductByCategory);

// list orders
router.get("/orders", listOrders);

// create orders

router.post("/orders", createOrder);

// change order status
router.patch("/orders/:orderId", changeOrderStatus);

// delete order status
router.delete("/orders/:orderId", removeOrder);
