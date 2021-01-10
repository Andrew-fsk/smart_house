$(document).ready(function ($) {
    setMap();
    setDillerMap();


    $(document).on('click touchend', '.contact-list.our-map .contact-item', function () {
        $('.contact-list.our-map .contact-item').removeClass('active');
        $(this).addClass('active');
        setMap();
    })

    $(document).on('click touchend', '.diller-taps .contact-list .contact-item', function () {
        $('.diller-taps .current .contact-list .contact-item').removeClass('active');
        $(this).addClass('active');
        setDillerMap();
    })


    function setMap() {
        let Address = $('.contact-list.our-map .contact-item.active').find('.address').text();
        $('#our-map iframe').replaceWith(`<iframe width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" scrolling="no" marginheight="0"marginwidth="0"src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ru&amp;q=${Address}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`);
    }

    function setDillerMap() {
        $('.diller-taps .tab .contact-item.active').each(function () {
            let Address1 = $(this).find('.address').text();
            $(this).parent().parent().find('.diller-map iframe').replaceWith(`<iframe width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" scrolling="no" marginheight="0"marginwidth="0"src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ru&amp;q=${Address1}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`);;
        })
    }
})