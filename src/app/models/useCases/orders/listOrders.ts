import { Request, Response } from "express";
import { Order } from "../../Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find().populate("products.product").sort({
      createdAt: -1,
    });

    res.status(201).json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
