(function ($) {
    "use strict";

    $('.contato').css('color', '#327964')
    $('.contato').css('border-bottom-color', '#920f12')

    if ($(window).width() >= 768)
        $('body').css('margin-bottom', $('footer').height() + "px");
})(jQuery); // End of use strict