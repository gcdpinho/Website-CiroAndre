(function ($) {
    "use strict";

    $('.about').css('color', '#920f12')
    $('.about').css('border-bottom-color', '#920f12')

    if ($(window).width() >= 768) {
        if ($(window).width() < 1024)
            $('body').css('margin-bottom', $('footer').height() + 30 + "px");
        else
            $('body').css('margin-bottom', $('footer').height() + "px");
    }
    /*
    if ($(window).width() >= 992)
        $('.about-text').css('margin-top', -$('.about-text').height() / 2);
*/
    $('html').css('overflow-y', 'auto');


})(jQuery); // End of use strict