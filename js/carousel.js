function carouselRightArrowListen(event, carouselItems, carouselActiveItem, carouselCounterItems){
    var carouselActiveItemIndex = parseInt(carouselActiveItem.getAttribute('carousel-index'));

    if(carouselActiveItem.querySelectorAll('video').length > 0){
        carouselActiveItem.querySelectorAll('video')[0].pause()
    }
    
    if(carouselActiveItemIndex == carouselItems.length){
        var nextItemIndex = 1;
    } else {
        var nextItemIndex = carouselActiveItemIndex + 1;
    }

    var carouselNextActiveItem = carouselItems[nextItemIndex-1];
    var carouselCounterActiveItem = carouselCounterItems[carouselActiveItemIndex-1];
    var carouselCounterNextActiveItem = carouselCounterItems[nextItemIndex-1];
    
    carouselNextActiveItem.classList.toggle('inactive');
    carouselCounterActiveItem.classList.toggle('counter-inactive');
    carouselCounterNextActiveItem.classList.toggle('counter-inactive');
    carouselActiveItem.classList.toggle('inactive');
}

function carouselLeftArrowListen(event, carouselItems, carouselActiveItem, carouselCounterItems){
    var carouselActiveItemIndex = parseInt(carouselActiveItem.getAttribute('carousel-index'));

    if(carouselActiveItem.querySelectorAll('video').length > 0){
        carouselActiveItem.querySelectorAll('video')[0].pause()
    }
    
    if(carouselActiveItemIndex == 1){
        var nextItemIndex = carouselItems.length;
    } else {
        var nextItemIndex = carouselActiveItemIndex - 1;
    }

    var carouselNextActiveItem = carouselItems[nextItemIndex-1];
    var carouselCounterActiveItem = carouselCounterItems[carouselActiveItemIndex-1];
    var carouselCounterNextActiveItem = carouselCounterItems[nextItemIndex-1];
    
    carouselNextActiveItem.classList.toggle('inactive');
    carouselCounterActiveItem.classList.toggle('counter-inactive');
    carouselCounterNextActiveItem.classList.toggle('counter-inactive');
    carouselActiveItem.classList.toggle('inactive');
}

document.addEventListener("DOMContentLoaded", () => {
    console.log('OK');
    let carousels = document.querySelectorAll('.carousel');

    for(i=0; i<carousels.length; i++){
        let carousel = carousels[i];
        let carouselCounter = carousel.querySelector('.carousel-counter');

        let carouselItems = carousel.querySelectorAll('.carousel-item');

        let startIndex = carousel.getAttribute('start-index');

        let carouselRightArrow = carousel.querySelector('.carousel-right-arrow');
        let carouselLeftArrow = carousel.querySelector('.carousel-left-arrow');


        for(j=0; j<carouselItems.length; j++){
            carouselItems[j].setAttribute('carousel-index', j+1);
            if(j+1 == startIndex){
                carouselItems[j].setAttribute('carousel-index', j+1);
                carouselItems[j].classList.toggle('inactive');
                carouselCounter.innerHTML+='<div class="carousel-counter-unit"></div>'
            } else{
                carouselItems[j].setAttribute('carousel-index', j+1);
                carouselCounter.innerHTML+='<div class="carousel-counter-unit counter-inactive"></div>'
            }
        }

        let carouselCounterItems = document.querySelectorAll('.carousel-counter-unit');

        carouselRightArrow.addEventListener('click', (e) =>{
            var carouselActiveItem = carousel.querySelector('.carousel-item:not(.inactive)');
            carouselRightArrowListen(e, carouselItems, carouselActiveItem, carouselCounterItems);
        })

        carouselLeftArrow.addEventListener('click', (e) => {
            var carouselActiveItem = carousel.querySelector('.carousel-item:not(.inactive)');
            carouselLeftArrowListen(e, carouselItems, carouselActiveItem, carouselCounterItems);
        })

        carousel.addEventListener('drag', (e) => {
            console.log(e);
        })



    }

})