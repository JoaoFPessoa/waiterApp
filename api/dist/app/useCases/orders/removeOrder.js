"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeOrder = void 0;
const Order_1 = require("../../models/Order");
function removeOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { orderId } = req.params;
            yield Order_1.Order.findByIdAndRemove(orderId);
            res.status(204).json({ message: "Order removed successfully" });
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
}
exports.removeOrder = removeOrder;
