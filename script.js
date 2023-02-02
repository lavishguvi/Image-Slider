const sliderImages = document.querySelectorAll('.slider-image');
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

let currentImageIndex = 0;

sliderImages[currentImageIndex].style.opacity = 1;

previousButton.addEventListener('click', () => {
  sliderImages[currentImageIndex].style.opacity = 0;
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = sliderImages.length - 1;
  }
  sliderImages[currentImageIndex].style.opacity = 1;
});

nextButton.addEventListener('click', () => {
  sliderImages[currentImageIndex].style.opacity = 0;
  currentImageIndex++;
  if (currentImageIndex > sliderImages.length - 1) {
    currentImageIndex = 0;
  }
  sliderImages[currentImageIndex].style.opacity = 1;
});
