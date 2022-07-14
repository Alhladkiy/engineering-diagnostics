const btnNextSlide = document.querySelector('.button-next-container');
const btnPrevSlide = document.querySelector('.button-prev-container');
const track = document.querySelector('.item-container-wrapper');
const item = document.querySelectorAll('.item');
const container = document.querySelector('.item-container');

const slidesToShow = 3;
const slidesToScroll = 1;
const itemCount = item.length; 
let position = 0;

const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

item.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

function showNextSlide() {
    btnNextSlide.addEventListener('click', () => {
        const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth ;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        track.style.transform = `translateX(${position}px)`;
        checkBtn();
    })

}

function showPrevSlide() {
    btnPrevSlide.addEventListener('click', () => {
        const itemsLeft =  Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        track.style.transform = `translateX(${position}px)`;
        checkBtn();
    });

}

function checkBtn() {
    const btnPrev = document.querySelector('.button-prev');
    const btnNext = document.querySelector('.button-next')

    if (position === 0) {
        btnPrev.disabled = true;
        btnPrev.style.backgroundColor = '#f5f5f5';
    } else {
        btnPrev.disabled = false;
        btnPrev.style.backgroundColor = '#fee040';

    } if (position <= -(itemCount - slidesToShow) * itemWidth) {
        btnNext.disabled = true;
        btnNext.style.backgroundColor = '#f5f5f5';
    } else {
        btnNext.disabled = false;
        btnNext.style.backgroundColor = '#fee040';
    }
}

showNextSlide()
showPrevSlide();
checkBtn();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll(".slide");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
