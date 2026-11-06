/*

//TP05
let monButton = document.getElementById("monButton");
let body = document.body;

monButton.addEventListener("click", () => {
  body.classList.toggle("theme");
});

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

// Exercice

let input = document.getElementById("taskInput"),
  monButton = document.getElementById("monButton"),
  monFormulaire = document.querySelector("form"),
  ul = document.createElement("ul"),
  body = document.body;

ul.id = "tasklist";

monFormulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  let supprimer = document.createElement("button");
  supprimer.textContent = "Supprimer";
  li.textContent = input.value;
  body.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(supprimer);
  input.value = "";

  supprimer.addEventListener("click", () => {
    ul.removeChild(li);
  });
});
*/

class User {
  constructor(id, nom, email, role) {
    this.id = id;
    this.nom = nom;
    this.email = email;
    this.role = role;
  }

  toDOM() {
    let body = document.body;
    let divUser = document.createElement("div");
    let paragraphe = document.createElement("p");
    paragraphe.textContent = `Id : ${this.id}, nom : ${this.nom}, email : ${this.email}, role : ${this.role}`;
    divUser.appendChild(paragraphe);
    body.appendChild(divUser);
  }
}
class UserManager {
  constructor() {
    this.user = [];
  }

  addUser(user) {
    this.user.push(user);
  }
  deleteUser(id) {
    this.user = this.user.filter((utilisateur) => utilisateur.id !== id);
  }
  render() {}
}

let monFormulaire = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let chiffre = 0;
let gestionUtilisateurs = new UserManager();

monFormulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  let nom = inputs[0].value,
    email = inputs[1].value,
    role = inputs[2].value;
  let utilisateur = new User(chiffre, nom, email, role);
  utilisateur.toDOM();
  chiffre++;
  inputs.forEach((champ) => (champ.value = ""));
  gestionUtilisateurs.addUser(utilisateur);
});
