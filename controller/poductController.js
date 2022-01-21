import { productModel } from "../model/productModel.js";
import { showProduct } from "../view/showProduct.js";

export function getProduct() {
  showProduct(productModel);
}
