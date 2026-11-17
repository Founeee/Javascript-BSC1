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
