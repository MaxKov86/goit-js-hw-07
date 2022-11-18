import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(`.gallery`);
const galleryCards = createGalleryCards(galleryItems);

galleryList.insertAdjacentHTML(`beforeend`, galleryCards);

galleryList.addEventListener(`click`, onGalleryCardClick)

function createGalleryCards(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
    </div>
        `
    }).join(``);
}

function onGalleryCardClick(e) {
    e.preventDefault();
    
    if (!e.target.classList.contains(`gallery__image`)) {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source}>
`)

    instance.show()

    galleryList.addEventListener("keydown", (e) => {
        if (e.key === 'Escape') {
            instance.close();
        }
    })
}




