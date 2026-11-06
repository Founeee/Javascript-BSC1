/*

//TP05
let monButton = document.getElementById("monButton");
let body = document.body;

monButton.addEventListener("click", () => {
  body.classList.toggle("theme");
});
*/

// Exercice
const products = [
  { id: 1, name: "Clavier mécanique", price: 85, inStock: true },
  { id: 2, name: "Souris sans fil", price: 30, inStock: false },
  { id: 3, name: "Ecran 27 pouces", price: 210, inStock: true },
  { id: 4, name: "Tapis XXL", price: 20, inStock: true },
];

function renderProducts(list) {
  let body = document.body;
  let div = document.createElement("div");
  div.id = "catalog";
  list.forEach((produit) => {
    let divCard = document.createElement("div");
    divCard.className = "card";
    let name = document.createElement("h3");
    name.textContent = produit.name;
    let prix = document.createElement("p");
    prix.textContent = produit.price;
    div.appendChild(divCard);
    divCard.appendChild(name);
    divCard.appendChild(prix);
  });

  body.appendChild(div);
}

renderProducts(products);
