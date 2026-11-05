// Moodle Exercice 1
let fruit = ["pomme", "banane", "orange"];
fruit.push("mangue");
fruit[1] = "fraise";

/*
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
