// let slideIndex = 0;
// showSlide(slideIndex);

// function changeSlide(n) {
//   showSlide(slideIndex += n);
// }

// function showSlide(n) {
//   const slides = document.getElementsByClassName("slide");
//   if (n >= slides.length) {
//     slideIndex = 0;
//   }
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex].style.display = "block";
// }

let slideIndex = 0;
showSlide(slideIndex);

// Auto slide every 3 seconds (3000 milliseconds)
const slideInterval = setInterval(() => {
  changeSlide(1);
}, 3000);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Pause auto sliding when hovering over the slider
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

// Resume auto sliding when not hovering
slider.addEventListener('mouseleave', () => {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 3000);
});


