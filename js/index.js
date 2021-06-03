var hHeight = $("header.header").innerHeight();
$('a#section-scrollbottom').on('click', function (e) {

    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 88
    }, '800');
    e.preventDefault();
});

$(function () {

    var nav_offset_top = $('header').outerHeight() + 300;
    function navbarFixed() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $("header").addClass("navbar_fixed");

            } else {
                $("header").removeClass("navbar_fixed");
            }
        });

    };
    navbarFixed();
});

$('.owl-carousel').owlCarousel({
    items: 2,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    margin: 30,
    dots: false,
    navText: ["<img src='./images/left_arrow.png' class='img-fluid'>", "<img src='./images/right_arrow.png' class='img-fluid'>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true,
        },
        767: {
            items: 2,
            nav: false,
            dots: true,
        },
        992: {
            items: 3,
            nav: true,
            loop: false
        },
        1400: {
            items: 3,
            margin: 40,
            nav: true,
            loop: false
        }
    }
})

var btn = $('#to-top');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});