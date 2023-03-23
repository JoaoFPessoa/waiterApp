import { Request, Response } from "express";
import { Order } from "../../Order";

export async function createOrder(req: Request, res: Response) {
  const { table, products } = req.body;
  try {
    const order = await Order.create({
      table,
      products,
    });

    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
