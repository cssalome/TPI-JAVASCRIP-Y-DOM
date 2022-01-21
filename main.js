import { menuHamburger } from "./view/showMenuHambuerger.js";
import { getProduct } from "./controller/poductController.js";
import { getMenu } from "/controller/menuController.js";

const main = () => {
  getMenu();
  getProduct();
  menuHamburger();
};

main();
