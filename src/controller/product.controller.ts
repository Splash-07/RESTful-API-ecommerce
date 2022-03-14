import { SearchCurrentProductInput } from "./../schema/product.schema";
import { Response, Request } from "express";
import { findAllProducts, findProductById } from "../service/product.service";

export async function getAllProductsHandler(req: Request, res: Response) {
  const products = await findAllProducts();
  return res.send(products);
}

export async function getAllGenderProductsHandler(req: Request, res: Response) {
  const { gender } = req.params;
  console.log(" gender fired");
  const products = await findAllProducts();
  return res.send(products);
}
export async function getCurrentProductHandler(req: Request<SearchCurrentProductInput>, res: Response) {
  const { id } = req.params;
  console.log("id fired");
  const product = await findProductById(id);
  return res.send(product);
}
