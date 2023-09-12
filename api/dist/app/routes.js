"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const listCategories_1 = require("./useCases/categories/listCategories");
const createCategory_1 = require("./useCases/categories/createCategory");
const listProducts_1 = require("./useCases/products/listProducts");
const createProduct_1 = require("./useCases/products/createProduct");
const node_path_1 = __importDefault(require("node:path"));
const multer_1 = __importDefault(require("multer"));
const listProductByCategory_1 = require("./useCases/categories/listProductByCategory");
const createOrder_1 = require("./useCases/orders/createOrder");
const listsOrders_1 = require("./useCases/orders/listsOrders");
const changeOrderStatus_1 = require("./useCases/orders/changeOrderStatus");
const removeOrder_1 = require("./useCases/orders/removeOrder");
exports.router = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(req, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, "../..", "uploads"));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});
// list categories
exports.router.get("/categories", listCategories_1.listCategories);
// create category
exports.router.post("/categories", createCategory_1.createCategory);
// list products
exports.router.get("/products", listProducts_1.listProducts);
// create product
exports.router.post("/products", upload.single("image"), createProduct_1.createProduct);
// get product by category
exports.router.get("/categories/:categoryId/products", listProductByCategory_1.listProductByCategory);
// list orders
exports.router.get("/orders", listsOrders_1.listOrders);
// create orders
exports.router.post("/orders", createOrder_1.createOrder);
// change order status
exports.router.patch("/orders/:orderId", changeOrderStatus_1.changeOrderStatus);
// delete order status
exports.router.delete("/orders/:orderId", removeOrder_1.removeOrder);
