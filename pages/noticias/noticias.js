(function ($) {
    "use strict";
    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });

    $('.noticias').css('color', '#920f12')
    $('.noticias').css('border-bottom-color', '#920f12')

    var screenH = $(window).height();
    var screenW = $(window).width();
    $('#loader').css('top', screenH / 2);
    var value = screenW / 2 - $("#loader").width() / 2;
    if (value < 0)
        value *= -1;
    $('#loader').css('left', value);
    $('#loader').LineProgressbar({
        percentage: 100,
        duration: 5000,
        fillBackgroundColor: '#920f12',
        height: '5px',
        radius: '10px'

    });
    /*
    var bar = $('#progress-bar')
    var width = bar.width();
    var id = setInterval(frame, 15);
  
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        $('#loader').remove();
        $('.background-loader').remove();
        $('html').css('overflow-y', 'auto');
      } else {
        width++;
        bar.width(width + '%');
        bar.html(width * 1 + '%');
      }
    }
    */

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
                        $('.pages-not' + aux).append("<div class='row not'>  <div class='_3x-2 text-center'> <img class='noticias-img' src=' " + response.data[i]['full_picture'] + "'/> \
                        <div class='noticia-msg' align='justify'> " + hashTag(response.data[i]['message']) + "</div>");
                        if (aux == 1)
                            aux = 2;
                        else
                            aux = 1;
                    }
                }
                $('#loader').remove();
                $('.background-loader').remove();
                $('html').css('overflow-y', 'auto');
                /*
                $('#loader').remove();
                $('.pages-noticias').css('display', 'flex');
                $('.not-mobile').css('min-height', '100px');
                */
            }
        );
    });

    if ($(window).width() >= 768) {
        $('body').css('margin-bottom', $('footer').height() + 30 + "px");
    }

    function hashTag(text) {
        var flag = true;
        var split = text.split(" ");
        var newText = "";
        for (var i = 0; i < split.length; i++) {
          var newSplit = split[i].split("\n");
          for (var j = 0; j < newSplit.length; j++) {
            var index = newSplit[j].indexOf("#");
            if (index >= 0) {
              newText += newSplit[j].substring(0, index);
              if (!flag)
                newText += "<br>";
              newText += "<a class='hashTag' href='https://twitter.com/hashtag/" + newSplit[j].substring(index + 1, newSplit[j].length) + "?src=hash' target='_blank'>";
              newText += newSplit[j].substring(index, newSplit[j].length);
              newText += "</a><br>";
              flag = true;
            } else if (newSplit[j] != "") {
              newText += newSplit[j] + " ";
              flag = false;
            }
          }
        }
    
        return newText;
      }

})(jQuery); // End of use strict