const name = "square";

function draw(context, length, x, y, color) {
  context.fillRect(x, y, length, length);
  context.fillStyle = color;
  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}

function reportArea(length, listId) {
  let liste = document.getElementById(listId);
  let li = document.createElement("li");
  li.textContent = `La surface de mon carré est égal à ${length ** 2}`;
  liste.appendChild(li);
}

export { name, draw, reportArea };
