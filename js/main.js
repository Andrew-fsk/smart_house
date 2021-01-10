$(document).ready(function ($) {
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

    $(document).on('click touchend', '.main-slider .calc-button', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".calc-block-wrap").offset().top - $('header').innerHeight()
        }, 1200);
        return false;
    })

    $(document).on('click touchend', '.play-button', function () {
        $('.burger.menu-open').click();
        $.fancybox.open({
            src  : 'https://www.youtube.com/embed/gLO6YUUWiFg?autoplay=1',
            type : 'iframe',
            opts : {
            }
        });
        return false;
    })

    if( !isMobile.any() ){
        setHeight();
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed');
            $('body').css('padding-top', $('header').innerHeight());
            $('header .logo-container').css({'padding-left': '0'}, 200);
        }else{
            $('header').removeClass('fixed');
            $('body').css('padding-top', 0);
            $('header .logo-container').css({'padding-left': $('.logo-wrap').innerWidth() + 20}, 200);
        }
    }else{
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed');
            $('body').css('padding-top', $('header').innerHeight());
        }else{
            $('header').removeClass('fixed');
            $('body').css('padding-top', 0);
        }
    }

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

    $('.show-room-list.slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
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
                tabContainers.removeClass('current');
                tabContainers.filter(this.hash).show();
                tabContainers.filter(this.hash).addClass('current');
                $(listItem).removeClass('active');
                $(this).parent('li').addClass('active');
                return false;
            }).filter(':first').click();
    });

    let slider1 = document.getElementById('square-slide')
    if(slider1){
        let m2 = 10;

        $('.calc-block-wrap .calc-item input').change(function () {
            m2 = 10;

            $('.calc-block-wrap .calc-item input').each(function () {
                if($(this).is(':checked')){
                    m2 = m2 + $(this).prev().data('sum');
                }
            })
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
    }


    $('.js-input').on('input', function (e) {
        let placeholder = jQuery(this).closest(".validation-field").find('.placeholder');
        if (jQuery(this).val()) {
            placeholder.addClass('active');
        } else {
            placeholder.removeClass('active');
        }
    });

    $('.footer-trigger').on('click touchend', function () {
        if($(this).parent().hasClass('active')){
            $(this).parent().next().slideToggle();
            $(this).parent().toggleClass('active');
        }else{
            $('.footer-trigger').parent().removeClass('active');
            $('.footer-trigger').parent().next().slideUp();
            $(this).parent().next().slideToggle();
            $(this).parent().toggleClass('active');
        }
        return false;
    })

    $(".various").fancybox({
        maxWidth    : 800,
        maxHeight   : 600,
        fitToView   : false,
        width       : '70%',
        height      : '70%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });
})

$(window).on('scroll', function () {
    headerFixed();
})

$(window).resize(function () {
    if( !isMobile.any() ){
        setHeight();
        $('header .logo-container').css('padding-left', $('.logo-wrap').innerWidth() + 20);
    }else{
    }
})

function setValues(value, m2) {
    $('.square span').text(value);
    $('.calc-block-wrap .total-line span').text(value * m2 + 'грн');
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


function headerFixed() {
    if( !isMobile.any() ){
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed');
            $('body').css('padding-top', $('header').innerHeight());
            $('header .logo-container').animate({'padding-left': '0'}, 200);
        }else{
            $('header').removeClass('fixed');
            $('body').css('padding-top', 0);
            $('header .logo-container').finish();
            $('header .logo-container').animate({'padding-left': $('.logo-wrap').innerWidth() + 20}, 200);
        }
    }else{
        if($(window).scrollTop() > 0){
            $('header').addClass('fixed');
            $('body').css('padding-top', $('header').innerHeight());
        }else{
            $('header').removeClass('fixed');
            $('body').css('padding-top', 0);
        }
    }


}

function setHeight() {
    let height = $(window).innerHeight() - $('header').innerHeight();
    $('.page-404-wrap').css('height', height )
}