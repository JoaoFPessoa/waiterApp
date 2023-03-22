import { Request, Response } from "express";
import { Product } from "../../Product";

export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Product.find();

    res.status(201).json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
