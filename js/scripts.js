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

const carouselSlides = document.querySelector('.carousel');

for (let i = 0; i < images.length; i++) {

      console.log(images[i]);

      carouselSlides.innerHTML += `<div class="slide"><img src="${images[i]}"></div>`;

}