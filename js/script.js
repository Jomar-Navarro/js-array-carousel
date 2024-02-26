console.log('js-array-carousel');

const itemsWrapper = document.querySelector('.items-wrapper');
const topArrow = document.querySelector('.top');
const downArrow = document.querySelector('.down');

let counterImg = 0;

const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
];

// ItemsWrapper mi stampa il tag img la le immagini dell'array con le sua apposita classe hide
for (let i = 0; i < images.length; i++) {
  const img = images[i];
  itemsWrapper.innerHTML += `
  <img class="img hide" src="${img}" alt="#">
  `
}

// Mi rimuove l'hide della prima immagine
const itemsCollector = document.getElementsByClassName('img');
itemsCollector[counterImg].classList.remove('hide');

// Freccia in alto
topArrow.addEventListener('click', function(){
  itemsCollector[counterImg--].classList.add('hide');
  
  // L'immagine quando é minore di 0 del contatore prende l'ultima immagine
  if (counterImg < 0) {
    counterImg = images.length - 1;
  }

  itemsCollector[counterImg].classList.remove('hide');
})

// Freccia in basso
downArrow.addEventListener('click', function(){

  itemsCollector[counterImg++].classList.add('hide');

  // Alla fine del contatore dell'array, l'immagine ritorna a 0
  if (counterImg >= images.length) {
    counterImg = 0;
  }

  itemsCollector[counterImg].classList.remove('hide');
})

