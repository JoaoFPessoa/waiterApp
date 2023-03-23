import { Request, Response } from "express";
import { Product } from "../../Product";

export async function deleteProduct(req: Request, res: Response) {
  try {
    const product = await Product.deleteOne(req.body.id);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
