import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const container = document.querySelector(".gallery");

container.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description}) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
  `
    )
    .join("");
}

let lightbox = new SimpleLightbox('.gallery .gallery__link', { captionsData: 'alt', captionDelay: 250, });

console.log(galleryItems);