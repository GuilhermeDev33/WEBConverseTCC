const containerSlide = document.querySelector('.slide');
let slidesLi = document.querySelectorAll('.slide li');

console.log(containerSlide)

const prevButton = document.querySelector('.left-button');
const nextButton = document.querySelector('.right-button');

function prevSlide() {
  const activeElement = document.querySelector('.active');
  activeElement.previousElementSibling.classList.add('active');
  activeElement.classList.remove('active');

  containerSlide.insertBefore(slidesLi[slidesLi.length - 1], slidesLi[0]);
  slidesLi = document.querySelectorAll('.slide li');
}

function nextSlide() {
  const activeElement = document.querySelector('.active');
  activeElement.nextElementSibling.classList.add('active');
  activeElement.classList.remove('active');

  containerSlide.appendChild(slidesLi[0]);
  slidesLi = document.querySelectorAll('.slide li');
}

function onResize() {
  // if (window.innerWidth <= 600) {
  //   const activeElement = document.querySelector('.active');
  //   activeElement.previousElementSibling.classList.add('active');
  //   activeElement.classList.remove('active');
  // }
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
window.addEventListener('resize', onResize);