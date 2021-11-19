const slides = document.getElementsByClassName("carousel-item");
const nextBtn = document.getElementById("carousel-button-next");
const prevBtn = document.getElementById("carousel-button-prev");
let slidePosition = 0;
const totalSlides = slides.length;

function moveToNextSlide() {
    hideAllSlides();
    if (slidePosition === totalSlides -1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
    hideAllSlides();
    if (slidePosition === 0){
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible")
}

function hideAllSlides() {
    for(const items of slides) {
        slides[slidePosition].classList.remove("carousel-item-visible");
        slides[slidePosition].classList.add("carousel-item-hidden");
    }
}

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPrevSlide);