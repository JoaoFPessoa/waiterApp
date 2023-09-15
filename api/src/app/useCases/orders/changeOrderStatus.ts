import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!["WAITING", "IN_PROGRESS", "DONE"].includes(status)) {
      return res.status(400).json({
        error: "Status should be one of these: WAITING, IN_PRODUCTS, DONE",
      });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    res.status(204).json({ message: "Status updated successfully" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
