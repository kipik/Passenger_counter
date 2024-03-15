// initialise le compteur des entrées
let count = 0;
let saved = 0;
const countEl = document.getElementById("count-el");
const savedEl = document.getElementById("saved-el");

// méthode = une fonction attachée à un objet
// entre parenthèses : le pass in argument

// écoute clicks sur le bouton d'ajout
// ajouté onclick='' dans le HTML

// incrémente le compteur si click
function increment() {
  count++;

  // et modifie le HTML
  countEl.innerText = count;
}

// Crée une fonction save() qui affiche le nombre d'entrées

function save() {
  saved = saved + count;
  savedEl.innerText = saved;
  count = 0;
  countEl.innerText = count;
}
