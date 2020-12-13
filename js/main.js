$(document).ready(function () {
    $('.header-menu').PopupSlider({
        effect: 'right',
        button: '.burger',
        closeButton: '.burger',
        container: 'header ',
        onMenuOpen: function () {
            document.activeElement.blur();
        },
        onMenuClose: function () {
            document.activeElement.blur();
        }
    });

    $('.main-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
})