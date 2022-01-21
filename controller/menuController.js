import { menuModel } from "../model/menuModel.js";
import { showMenu } from "../view/showMenu.js";

export function getMenu() {
  showMenu(menuModel);
}
