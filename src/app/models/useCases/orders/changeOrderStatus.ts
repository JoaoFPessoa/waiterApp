import { Request, Response } from "express";
import { Order } from "../../Order";

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { status } = req.body;
    const { orderId } = req.params;

    if (!["WAITING", "IN_PRODUCTION", "DONE"].includes(status)) {
      res.status(400).json({
        error: "Status not valid",
      });
    }
    // const order = await Order.updateOne({
    //   status,
    // });
    await Order.findByIdAndUpdate(orderId, { status });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
