$(document).ready(function() {
    // nav menu drops down
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    // nav menu functionality
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    // nav menu scrolling
    $('nav a[href*="#"]').on('click', function () {
        // removed keyframes: and options: (two lines below), after .animate({})
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1725);
    });

    // bottom-button-up scrolling to top
    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1600);
    })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        // once: true
    })
});