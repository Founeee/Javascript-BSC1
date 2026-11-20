/*
// Exercice 1
let monBouton = document.querySelector("button");
let themeSauv = sessionStorage.getItem("theme");
console.log(themeSauv);

if (themeSauv === "noir") {
  document.body.classList.add("theme");
}

monBouton.addEventListener("click", () => {
  document.body.classList.toggle("theme");
  if (document.body.classList.contains("theme")) {
    sessionStorage.setItem("theme", "noir");
  } else {
    sessionStorage.removeItem("theme");
  }
});

// Exercice 2
let monFormulaire = document.querySelector("form");
let nom = document.getElementById("name"),
  email = document.getElementById("email"),
  message = document.getElementById("message"),
  monBouton = document.querySelector("button");

let monObjet = { nom: nom.value, email: email.value, message: message.value };

monFormulaire.addEventListener("input", () => {
  monObjet = { nom: nom.value, email: email.value, message: message.value };
  sessionStorage.setItem("historique", JSON.stringify(monObjet));
});

let sauvegarde = sessionStorage.getItem("historique");
sauvegarde = JSON.parse(sauvegarde);

if (sessionStorage.getItem("historique")) {
  nom.value = sauvegarde.nom;
  email.value = sauvegarde.email;
  message.value = sauvegarde.message;
}

monFormulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Informations envoyée");
  sessionStorage.clear();
  nom.value = "";
  email.value = "";
  message.value = "";
});
*/
