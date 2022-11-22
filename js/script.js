$(document).ready(function(){
    $('.team-wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next.png" alt="next"></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true        
                }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true        
                }
            }
        ]
    });
  });