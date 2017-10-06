(function ($) {
    "use strict";

    $('.about').css('color', '#327964')
    $('.about').css('border-bottom-color', '#920f12')

    if ($(window).width() >= 768)
        $('body').css('margin-bottom', $('footer').height() + "px");
    if ($(window).width() >= 992)
        $('.about-text').css('margin-top', -$('.about-text').height() / 2);

    $('html').css('overflow-y', 'auto');


})(jQuery); // End of use strict