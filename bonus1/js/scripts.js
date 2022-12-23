/*
1. Creare array contenente le immagini 
2. Inserire gli elementi nell'html in base al numero di elementi nell'array
3. Rendere visibile tramite classe apposita solo la prima immagine mentre le altre sono nascoste
4. Scrivere funzione che al click sulle frecce cambi l'immagine 
*/
const images = [
      "img/01.webp",
      "img/02.webp",
      "img/03.webp",
      "img/04.webp",
      "img/05.webp"
];

const carouselSlide = document.querySelector('.carousel');

for (let i = 0; i < images.length; i++) {

      console.log(images[i]);
      carouselSlide.innerHTML += `<div class="slide"><img src="${images[i]}"></div>`;

}

const allSlides = document.querySelectorAll('.slide');
console.log(allSlides);
allSlides[0].classList.add('selected');

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
let current = 0;

next.addEventListener('click',

      function () {

            console.log('Cliccato su next');
            allSlides[current].classList.remove('selected');
            
            if (current == allSlides.length - 1) {
                  
                  current = 0;
                  allSlides[current].classList.add('selected');
      
            } else {

                  current++;
                  allSlides[current].classList.add('selected');

            }
      
      }

);

previous.addEventListener('click',

      function () {

            console.log('Cliccato su previous');
            allSlides[current].classList.remove('selected');

            if (current == 0) {

                  current = allSlides.length - 1;
                  allSlides[current].classList.add('selected');

            } else {

                  current--;
                  allSlides[current].classList.add('selected');

            }

      }

);