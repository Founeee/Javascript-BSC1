const produits = [
  { id: 1, libelle: "Ecran", prix: 120 },
  { id: 2, libelle: "Clavier", prix: 20 },
  { id: 3, libelle: "Souris", prix: 12 },
];

function getPrixTTC() {
  return produits.map((produit) => ({
    ...produit,
    prix: produit.prix * 1.2, // TVA de 20%,
  }));
}

function formater(produit) {
  return `Produit : ${produit.libelle} - ${produit.prix}`;
}

export { produits, getPrixTTC, formater };
