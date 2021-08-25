$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay: 400,
    responsive:{
        0:{
            items:1
        },

        480: {
            items:1
        },

        576:{
            items:2
        },

        768: {
            items: 3
        },

        1000:{
            items:4
        },

        1024: {
            items:5
        },

        1100: {
            items:5
        }
    }
})