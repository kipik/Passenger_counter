// initialise le compteur des entrées
let count = 0;

// écoute clicks sur le bouton d'ajout
// document.addEventListener('increment-btn', onclick);

// incrémente le compteur si click
function increment() {
  count++;
  // console.log(count);

  // modifie le HTML
  document.querySelector('#count-el').innerHTML = count;
}
