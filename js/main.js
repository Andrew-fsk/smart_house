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
        arrows: true,
        swipeToSlide: true
    });

    $('.clients-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


        $('.tabs').each(function(){
            var tabContainers = $(this).children('div'),
                listItem = $(this).find('.tab-list>li');
            tabContainers.hide().filter(':first').show();
            $(this).find('.tab-list a').click(function () {
                tabContainers.hide();
                tabContainers.filter(this.hash).show();
                $(listItem).removeClass('active');
                $(this).parent('li').addClass('active');
                return false;
            }).filter(':first').click();
    });
})