/*
// Exercice 1
let compteur = 5;
const mou = setInterval(() => {
  if (compteur >= 0) {
    console.log(compteur);
    compteur -= 1;
  } else {
    console.log("Décollage !");
    clearInterval(mou);
  }
}, 1000);
// Exercice 2
let maPromesse = function verifierConnexion(estConnecte) {
  let promesse = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (estConnecte) {
        resolve("Utilisateur authentifié");
      } else {
        reject("Erreur : accès refusé");
      }
    }, 1500);
  });

  return promesse;
};

maPromesse(false)
  .then((message) => console.log(message))
  .catch((erreur) => console.log(erreur));
// Exercice 3

function recupererUtilisateur(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      id <= 0 ? reject("ID invalide") : resolve({ id: id, nom: "Alice" });
    }, 1000);
  });
}

function recupererCommandes(Utilisateur) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Commande 01", "Commande 02"]);
    }, 1000);
  });
}
recupererUtilisateur(1).then((utilisateur) => {
  recupererCommandes(utilisateur).then((commande) => {
    console.log(`Commandes de ${utilisateur.nom} : ${commande}`);
  });
});
// Exercice 4
async function afficherDetailsClient(id) {
  try {
    const utilisateur = await recupererUtilisateur(id);
    const commandes = await recupererCommandes(utilisateur);
    console.log(`Commandes de ${utilisateur.nom} : ${commandes}`);
  } catch (erreur) {
    console.error(erreur);
  }
}

afficherDetailsClient(-2);
// TP 07
function fetchSimulatedData() {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 3000 + 1000;
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(["Donnée 1", "Donnée 2", "Donnée 3"]);
      } else {
        reject("Erreur : Impossible de récupérer les données");
      }
    }, delay);
  });
}

async function asynchrone() {
  try {
    let data = await fetchSimulatedData();
    let p = document.createElement("p");
    p.textContent = data;
    body.appendChild(p);
    return data;
  } catch (erreur) {
    console.error(erreur);
  }
}

let bouton = document.querySelector("button");
let body = document.body;

bouton.addEventListener("click", () => {
  asynchrone();
});
*/
