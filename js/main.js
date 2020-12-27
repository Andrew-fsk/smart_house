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
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true
    });

    $('.project-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
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

    let slider1 = document.getElementById('square-slide')
    let m2 = 10;

    $('.calc-block-wrap .calc-item input').change(function () {
        m2 = 10;

        $('.calc-block-wrap .calc-item input').each(function () {
            if($(this).is(':checked')){
                m2 = m2 + $(this).prev().data('sum');
            }
        })
        console.log(m2);
        setValues($('.square span').text(), m2);

    });

    noUiSlider.create(slider1, {
        start: 25,
        animate: true,
        range: {
            min: 0,
            max: 450
        },
        connect: [true, false],
        pips: {
            mode: 'count',
            values: 10,
            density: 5
        }
    });
    slider1.noUiSlider.on('update', function (values, handle) {
        let value = parseInt(values[handle])
        setValues(value, m2)
    });

    $('.js-input').on('input', function (e) {
        let placeholder = jQuery(this).closest(".validation-field").find('.placeholder');
        if (jQuery(this).val()) {
            placeholder.addClass('active');
        } else {
            placeholder.removeClass('active');
        }
    });

    $('.footer-trigger').on('click touchend', function () {
        $(this).parent().next().slideToggle();
        $(this).parent().toggleClass('active');
        return false;
    })
})

function setValues(value, m2) {
    $('.square span').text(value);
    $('.calc-block-wrap .total-line span').text(value * m2 + 'грн');
}