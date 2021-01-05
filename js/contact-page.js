$(document).ready(function () {
    let address = $('.first .contact-item.active').find('.address').text();
    $('#our-map').html(`<iframe width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" scrolling="no" marginheight="0"marginwidth="0"src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ru&amp;q=${address}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`)
    setMap();
    $(document).on('click touchend', '.contact-list .contact-item', function () {
        $('.contact-list .contact-item').removeClass('active');
        $(this).addClass('active');
        setMap();
    })
    function setMap() {
            let Address = $('.contact-item.active').find('.address').text();
            $('#our-map iframe').replaceWith(`<iframe width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" scrolling="no" marginheight="0"marginwidth="0"src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ru&amp;q=${Address}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>`);
    }
})