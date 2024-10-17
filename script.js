let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const photos = document.querySelectorAll('.photo');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    handleScrollAnimations();
});

/* Animación de aparición al hacer scroll */
function handleScrollAnimations() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        
        photos.forEach(photo => {
            const photoTop = photo.getBoundingClientRect().top + window.scrollY;
            
            if (scrollPosition > photoTop + 100) {
                photo.classList.add('visible');
            }
        });
    });
}
