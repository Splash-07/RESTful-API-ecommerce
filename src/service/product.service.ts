import ProductModel from "../model/product.model";

export async function findAllProducts() {
  return ProductModel.find();
}

export async function findAllProductsByGender() {
  return ProductModel.find();
}

export async function findProductById(id: string) {
  return ProductModel.findById(id);
}
