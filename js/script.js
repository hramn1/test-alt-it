"use strict";
const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 35,
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 35
        },
        1023: {
            slidesPerView: 2,
            spaceBetween: 35
        },
        1279: {
            slidesPerView: 3,
            spaceBetween: 35
        }
    },
    pagination: {
        el: '.slider-course__pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.slider-course__btn--next',
        prevEl: '.slider-course__btn--prev',
    },
})
const modal = document.querySelector('.modal');
const btnStartLearn = document.querySelectorAll('.slider-overlay__btn');
const btnCloseModal = document.querySelector('.modal__close');
for (let btn of btnStartLearn){
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.add('modal--show');
        document.addEventListener("keydown", escPress);
        btnCloseModal.addEventListener('click', closeModal)
    })
}
function escPress(evt) {
    if(evt.key === 'Escape' || evt.key === 'Esc'){
        closeModal ();
    }
}
function closeModal() {
    setTimeout(()=>{
        modal.classList.remove('modal--closing');
        modal.classList.remove('modal--show');
    }, 700)
    modal.classList.add('modal--closing');
    document.removeEventListener(`keydown`, escPress);
}
