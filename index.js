// initialise le compteur des entrées
let count = 0;

// écoute clicks sur le bouton d'ajout
// ajouté onclick='' dans le HTML

// incrémente le compteur si click
function increment() {
  count++;

  // et modifie le HTML
  document.querySelector("#count-el").innerHTML = count;
}
