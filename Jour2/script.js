/*

// Moodle Exercice 1
let fruit = ["pomme", "banane", "orange"];
fruit.push("mangue");
fruit[1] = "fraise";

//Moodle exercice 2
fruit.forEach((element) => {
  console.log(element);
});

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}


//Moodle exercice 3
let nums = [3, 5, 7, 9, 11];
let bigNums = nums.map((position) => position * 2);

function additionnerIndex(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme;
}

// Moodle exercice 4
let students1 = { nom: "Foune", age: 22, note: 7 };
let students2 = { nom: "Adam", age: 18, note: 15 };
let students3 = { nom: "Armand", age: 18, note: 13 };

let student = [students1, students2, students3];

student.forEach((eleve) => {
  console.log(eleve.nom, eleve.note);
});

let noteSup12 = student.filter((eleve) => eleve.note > 12);
console.log(noteSup12);

let nomEleve = student.map((eleve) => eleve.nom);
console.log(nomEleve);

// Moodle exercice 5

let supinfoModule = {
  nom: "1WEBD",
  professeur: "Foune",
  students: student,

  addStudent: function (nom, age, note) {
    let nouvelleEleve = { nom: nom, age: age, note: note };
    this.students.push(nouvelleEleve);
  },

  afficherMoyenne: function () {
    let moyenne = 0;
    this.students.forEach((eleve) => {
      moyenne += eleve.note;
    });

    return moyenne;
  },
};

supinfoModule.addStudent("Estelle", 18, 16);
console.log(supinfoModule.students);
console.log(supinfoModule.afficherMoyenne());
*/
//

/*
// TP 4
//Exercie 1
class Person {
  constructor(name, age) {
    ((this.name = name), (this.age = age));
  }

  introduction() {
    return `Hi, my name is ${this.name} and I'm ${this.age}`;
  }
}

let personne1 = new Person("Evrad", 19);
console.log(personne1.introduction());

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  makeSound() {}
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    return "bark !";
  }
}

let chien = new Dog("Rex");
console.log(chien.makeSound());
console.log(chien.getName());
chien.setName("Mike");
console.log(chien.getName());

class Shape {
  getSurface() {}
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.rayon = r;
  }

  getSurface() {
    return Math.PI * this.rayon ** 2;
  }
}

class Square extends Shape {
  constructor(l) {
    super();
    this.longueur = l;
  }

  getSurface() {
    return this.longueur ** 2;
  }
}

let carre = new Square(4);
let cercle = new Circle(2.14);

console.log(carre.getSurface(), cercle.getSurface());
*/

//Exercice 1
class Vehicule {
  constructor(marque, modele) {
    this.marque = marque;
    this.modele = modele;
    this._vitesse = 0;
  }

  getVitesse() {
    return this._vitesse;
  }

  setVitesse(nouvelleVitesse) {
    nouvelleVitesse < 0
      ? console.error("Vitesse pas négative")
      : (this._vitesse = nouvelleVitesse);
  }

  klaxonner() {
    console.log("Pouet Pouet !");
  }

  afficherDetails() {
    console.log(this.marque, this.modele, this._vitesse);
  }
}

class Voiture extends Vehicule {
  constructor(marque, modele, nbPortes) {
    super(marque, modele);
    this.nbPortes = nbPortes;
  }

  klaxonner() {
    console.log("Tut tut!");
  }
}

class Moto extends Vehicule {
  constructor(marque, modele, aUnSideCar) {
    super(marque, modele);
    this.aUnSideCar = aUnSideCar;
  }

  klaxonner() {
    console.log("bip bip!");
  }
}

let voiture = new Voiture("Toyota", "Yarris", 5);
let moto = new Moto("Yamaha", "MT07", false);
voiture.setVitesse(50);
moto.setVitesse(-60);

const tab = [voiture, moto];

tab.forEach((vehicule) => {
  vehicule.klaxonner();
  vehicule.afficherDetails();
  console.log(vehicule.getVitesse());
});
