function create(id, parent, width, height) {
  const conteneurParent = document.getElementById(parent);
  const conteneur = document.createElement("div");
  div.id = id;

  conteneurParent.appendChild(conteneur);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  let ctx = canvas.getContext("2d");

  parent.appendChild(canvas);
  return { contexte: ctx, identifiant: id };
}

function createReportList(wrapperId) {
  const wrapper = document.getElementById(wrapperId);
  const ul = document.createElement("ul");
  let wId = `${wrapperId}-reportList`;
  ul.id = wId;
  wrapper.appendChild(ul);
  return wId;
}
