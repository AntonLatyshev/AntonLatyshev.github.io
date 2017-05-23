/**
 * Created by Iren_M on 17.10.2016.
 */

$(function() {
    $('.slides-about').slick();
});

$(function(){
    $('.slider-our-team').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 641,
                settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 481,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 361,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});


/*
function windowSize(){
    if ($(window).width() <= '360'){
        $(function() {
            $('.slider-our-team').slick({
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        });
        $(function() {
            $('.slides-about').slick();
        });
    } if ($(window).width() <= '480'){
        $(function() {
            $('.slider-our-team').slick({
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2
            });
        });
        $(function() {
            $('.slides-about').slick();
        });
    } if ($(window).width() <= '640'){
        $(function() {
            $('.slider-our-team').slick({
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3
            });
        });
        $(function() {
            $('.slides-about').slick();
        });
    } else {
        $(function() {
            $('.slider-our-team').slick({
                dots: true,
                slidesToShow: 4,
                slidesToScroll: 2
            });
        });
        $(function() {
            $('.slides-about').slick();
        });
    }
}

$(window).on('load resize',windowSize);
*/



/*
$(function() {
    $('.slider-our-team').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2
    });
});
*/


/*
$(function() {
    $(window).resize(doSomethingUseful);
});

function doSomethingUseful() {
    if ($(window).width() <= '568') {
        $('.slider-our-team').slick({
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2
        });
    }
    else {
        $('.slider-our-team').slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 2
        });
    }
}
*/

