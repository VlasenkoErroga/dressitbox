import 'owl.carousel';

$(document).ready(function(){
    const MAIN_SLIDER = $('.main-slider');
    const PRODUCT_SLIDER = $('.product-slider');

    MAIN_SLIDER.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        lazyLoad:true,
        margin:0
    });


    $('.main-slider__prev').click(function() {
        MAIN_SLIDER.trigger('prev.owl.carousel');
    })
    $('.main-slider__next').click(function() {
        MAIN_SLIDER.trigger('next.owl.carousel');
    })

    PRODUCT_SLIDER.owlCarousel({
        items: 5,
        loop: true,
        dots: false,
        lazyLoad:true,
        responsive:{
            
            0:{
                items:1
            },
            410:{
                items:2
            }, 
            550:{
                items:3
            },
            850:{
                item:4
            },
            992:{
                item:5
            }
        }
    });


    $('.product-slider__prev').click(function() {
        PRODUCT_SLIDER.trigger('prev.owl.carousel');
    })
    $('.product-slider__next').click(function() {
        PRODUCT_SLIDER.trigger('next.owl.carousel');
    })



  });