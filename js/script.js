console.log("JSOK");
/*********************fase 0***********************/
//prendo l'ul
const ul = document.querySelector("ul");
//array del cibo
const ingredients = ["patate", "cipolle", "uova", "burro", "sale", "pepe"];

let i = 0;
while (i !== ingredients.length) {
  ul.innerHTML += `<li> ${ingredients[i]}</li>`;
  i++;
}
