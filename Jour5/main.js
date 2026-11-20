import * as Square from "square";
import * as Canvas from "canvas";

let body = document.getElementById("body");
let canvas = Canvas.create("canvas", "body", 800, 600);

import { getActifs, formater as formaterUser } from "./Exercice/users.js";
import { getPrixTTC, formater as Catalogue } from "./Exercice/produits.js";

getActifs().forEach((utilisateur) => {
  console.log(formaterUser(utilisateur));
});

getPrixTTC().forEach((produit) => {
  console.log(Catalogue(produit));
});

Square.draw(canvas.contexte, 50, 0, 50, "#3cc2e7");
Square.draw(canvas.contexte, 190, 90, 20, "#3cc2e7");
Square.draw(canvas.contexte, 190, 490, 200, "#3fe73c");
