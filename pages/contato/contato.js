(function ($) {
    "use strict";

    $('.contato').css('color', '#920f12')
    $('.contato').css('border-bottom-color', '#920f12')

    $('html').css('overflow-y', 'auto');

    if ($(window).width() >= 768) {
        $('body').css('margin-bottom', $('footer').height() + 30 + "px");
    }
})(jQuery); // End of use strict