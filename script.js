let sliderSlide = document.querySelectorAll('.slider__slide')
let slider = document.querySelector('.slider')
let button = document.querySelectorAll('.slider__button')
let currentIndex = 0
let rightButton = document.querySelector('.slider__right')
let leftButton = document.querySelector('.slider__left')

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    }
    
function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
        
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % sliderSlide.length;
        showSlide(currentIndex);
        
        }

    function goToPrevSlide() {
            currentIndex = (currentIndex - 1 + sliderSlide.length) % sliderSlide.length;
            showSlide(currentIndex);
            
        }


        button.forEach((button, index) => {
            button.addEventListener('click', () => goToSlide(index));
        });


rightButton.addEventListener('click', goToNextSlide)
leftButton.addEventListener('click', goToPrevSlide)
showSlide(currentIndex)


