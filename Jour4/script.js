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
*/
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
