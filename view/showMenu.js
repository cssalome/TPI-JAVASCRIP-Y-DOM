import { menuModel } from "../model/menuModel.js";

export function showMenu() {
  menuModel.forEach((enlace) => {
    const nuevoItem = document.createElement("a");
    nuevoItem.href = enlace.link;
    nuevoItem.innerText = enlace.name;

    document.querySelector("nav.navegacion").appendChild(nuevoItem);
  });
}
