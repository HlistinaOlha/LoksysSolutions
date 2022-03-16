$(document).ready(function () {

    const burgerMenuEl = $('.burger-menu');

    burgerMenuEl.on('click', toggleMenu);

    function toggleMenu() {
        const menuEl = $('.popup-menu');
        const burgerLine = $('.burger-line');

        if (menuEl.hasClass('hide-menu')) {
            menuEl.removeClass('hide-menu').addClass('show-menu');
            burgerMenuEl.addClass('popup-burger');
            burgerLine.addClass('popup-burger-line');

        } else {
            menuEl.removeClass('show-menu').addClass('hide-menu');
            burgerMenuEl.removeClass('popup-burger');
            burgerLine.removeClass('popup-burger-line');
        }
    }

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,
        draggable: true,
        variableWidth: true,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        arrows: true,
        dots: true,
        centerMode: true,
        centerPadding: '430px',

        responsive: [
            {
                breakpoint: 930,
                settings: {
                    centerPadding: '30px',
                }
            }, {
                breakpoint: 751,
                settings: {
                    centerPadding: '15px',
                }
            }]
    });
});

