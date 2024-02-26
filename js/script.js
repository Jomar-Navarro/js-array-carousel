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

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  itemsWrapper.innerHTML += `
  <img class="img hide" src="${img}" alt="#">
  `
}

const itemsCollector = document.getElementsByClassName('img');

itemsCollector[counterImg].classList.remove('hide');

topArrow.addEventListener('click', function(){
  itemsCollector[counterImg--].classList.add('hide');

  itemsCollector[counterImg].classList.remove('hide');

})

downArrow.addEventListener('click', function(){

  itemsCollector[counterImg++].classList.add('hide');

  itemsCollector[counterImg].classList.remove('hide');

  
})

