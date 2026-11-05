/*

// Exercice 1, Partie 2
function calcul(prix, tva, articles) {
  let ttc = articles * prix * (1 + tva / 100);
  return ttc;
}
console.log(calcul(20, 10, 5));
*/

/*
// Exercice 2, Partie 2
// 1.
let x = 5,
  y = 23;

[x, y] = [y, x];
console.log(`La valeur de x =${x}, La valeur de y =${y}`);

//2.
let a = 3;
let b = 10;
let c;

c = a;
a = b;
b = c;
console.log(a, b);

// 3.
let j = 6;
let k = 8;
let l = j + k;

j = l - j;
k = l - k;

console.log(j, k);

*/

/*
function obtenirTarif(age, aCarte) {
  if (age < 12) {
    return "entrée gratuite";
  } else if ((age >= 12 && age <= 25) || aCarte == true) {
    return "entrée Tarif reduit";
  } else {
    return "entrée plein Tarif";
  }
}
console.log(obtenirTarif(82, false));
*/

/*
function choisirBoisson(codeBoisson, monnaieDonnee) {
  let prix;
  let calcul;
  let phrase;
  switch (codeBoisson) {
    case 1:
      prix = 1.5;
      break;
    case 2:
      prix = 2.0;
      break;
    case 3:
      prix = 2.5;
      break;
    default:
      return "code de boisson n'existe pas";
  }
  calcul = monnaieDonnee - prix;
  if (calcul >= 0) {
    phrase = `Boisson servie! monnaie rendu : ${calcul}€.`;
  } else {
    phrase = `Il manque ${-calcul}€.`;
  }
  return phrase;
}

console.log(choisirBoisson(1, 1));
*/

function nMultiple(n) {
  /*
  for (let i = 0; i < n + 1; i++) {
    console.log(i * n);
  }*/
}
