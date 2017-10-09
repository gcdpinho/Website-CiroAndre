(function ($) {
    "use strict";

    $('.contato').css('color', '#920f12')
    $('.contato').css('border-bottom-color', '#920f12')

    if ($(window).width() >= 768) {
        if ($(window).width() < 1024)
            $('body').css('margin-bottom', $('footer').height() + 30 + "px");
        else
            $('body').css('margin-bottom', $('footer').height() + "px");
    }

    $('html').css('overflow-y', 'auto');
})(jQuery); // End of use strict