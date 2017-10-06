(function ($) {
    "use strict";

    $('.noticias').css('color', '#327964')
    $('.noticias').css('border-bottom-color', '#920f12')

    $('html').css('overflow-y', 'auto');

    $.ajaxSetup({
        cache: true
    });
    $.getScript('https://connect.facebook.net/en_US/sdk.js', function () {
        FB.init({
            appId: 'teste',
            version: 'v2.10' // or v2.1, v2.2, v2.3, ...
        });
        FB.api(
            '/vereadorciroquintino/posts?fields=id,message,full_picture,source',
            'GET', {
                access_token: '127372897987875|3G72HfVj8QoyQrwUd-fGM9u0SAQ'
            },
            function (response) {
                var aux = 1;
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i]['message'] != undefined) {
                        $('.pages-not'+aux).append("<div class='row not'>  <div class='_3x-2 text-center'> <img class='noticias-img' src=' " + response.data[i]['full_picture'] + "'/> \
                        <div class='noticia-msg' align='justify'> " + response.data[i]['message'] + "</div>");
                        if (aux == 1)
                            aux = 2;
                        else
                            aux = 1;
                    }
                }
                $('#loader').remove();
                $('.pages-noticias').css('display', 'flex');
                $('.not-mobile').css('min-height', '100px');
            }
        );
    });
    
    if ($(window).width() >= 768)
        $('body').css('margin-bottom', $('footer').height() + "px");
})(jQuery); // End of use strict