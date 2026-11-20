const users = [
  { id: 1, nom: "Foune", actif: true },
  { id: 2, nom: "Keith", actif: false },
  { id: 3, nom: "Yanis", actif: true },
];

function getActifs() {
  return users.filter((user) => user.actif);
}

function formater(user) {
  return `Utilisateur : ${user.nom}`;
}

export { users, getActifs, formater };
