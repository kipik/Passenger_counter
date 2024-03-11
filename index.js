// initialise le compteur des entrées
let count = 0;
let countEl = document.getElementById("count-el");

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
