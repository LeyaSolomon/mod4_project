document.addEventListener('DOMContentLoaded', function() {
let galleryImages = document.querySelectorAll('.gallery-container img');
const overlay = document.querySelector('.overlay');
const popupImg = document.querySelector('.popup img');

const images = [
{ src: 'img2/card3.svg', alt: 'Poster1' },
{ src: 'img2/card7.svg', alt: 'Poster2' },
{ src: 'img2/card5.svg', alt: 'Poster3' },
{ src: 'img2/card6.svg', alt: 'Poster4' },
{ src: 'img2/card1.svg', alt: 'Poster5' },
{ src: 'img2/card4.svg', alt: 'Poster6' },
{ src: 'img2/card2.svg', alt: 'Poster7' }
];

galleryImages.forEach(img => {
img.addEventListener('click', function() {
    const foundImage = images.find(image => image.alt === this.alt);
    if (foundImage) {
    popupImg.src = foundImage.src;
    popupImg.alt = foundImage.alt;
    overlay.style.display = 'flex';
    }
});
});

overlay.addEventListener('click', function(e) {
if (e.target === overlay) {
    overlay.style.display = 'none';
}
});
});