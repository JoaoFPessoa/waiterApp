import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function removeOrder(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndRemove(orderId);

    res.status(204).json({ message: "Order removed successfully" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
