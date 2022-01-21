import { productModel } from "../model/productModel.js";

export function showProduct() {
  const template = document.getElementById("product-card");

  productModel.forEach((product) => {
    const clone = template.content.cloneNode(true);

    const img = clone.querySelector("img.product");
    img.src = product.img;

    const name = clone.querySelector("h3.name");
    name.innerText = product.name;

    const text = clone.querySelector("p.descripcion");
    text.innerText = product.text;

    const price = clone.querySelector("p.precio");
    price.innerText = product.price;

    const link = clone.querySelector("a.btn");
    link.href = product.link;

    const trolley = clone.querySelector("a.btn");
    trolley.innerText = product.trolley;

    const container = document.querySelector("div.listado-productos");
    container.appendChild(clone);
  });
}
