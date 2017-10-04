(function ($) {
  "use strict"; // Start of use strict
  /* Loader
  $(window).on('beforeunload', function () {
    $(window).scrollTop(0);
  });
  */
 
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });



  // Collapse the navbar when page is scrolled
  $(window).scroll(function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });


  if ($(window).width() >= 768)
    $('body').css('margin-bottom', $('footer').height() + "px");

  if ($(window).width() <= 1024) {
    $('.mapa').html('<div id="mapa-mobile"></div>')
  }


  /*Loader
  var screenH = $(window).height();
  var screenW = $(window).width();
  $('#loader').css('top', screenH / 2);
  var value = screenW / 2 - $("#loader").width() / 2;
  if (value < 0)
    value *= -1;
  $('#loader').css('left', value);
  var bar = $('#progress-bar')
  var width = bar.width();
  var id = setInterval(frame, 5);

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
  /* ----Slider-----
  if ($(window).width() > 1024) {
    $('.slider').css('height', $(window).height() - $('#mainNav').height() - $('.top-bar').height() - 50);
    $('.carousel-inner').css('width', $(window).width() - $(window).width() * 30 / 100);
    $('.carousel-inner').css('margin-left', $(window).width() * 15 / 100)
    $('.slider').css('width', '70%');
    var img = $('.slider');
    $('.slider').css('min-height', img[0].height);

    $(window).resize(function () {
      $('.slider').css('height', $(window).height() - $('#mainNav').height() - $('.top-bar').height() - 50);
      $('.carousel-inner').css('width', $(window).width() - $(window).width() * 30 / 100);
      $('.carousel-inner').css('margin-left', $(window).width() * 15 / 100)
      $('.slider').css('width', '70%');
      var img = $('.slider');
      $('.slider').css('min-height', img[0].height);

    });
  } else {
    var width = 600;
    if ($(window).width() <= 767)
      width = 300
    $('.slider').height(width);
    $('.slider').css('width', '100%');
    $('.carousel-inner').css('margin-top', '10px')

    $(window).resize(function () {
      $('.slider').height(width);
      $('.carousel-inner').css('width', $(window).width());
      $('.slider').css('width', '100%');

    });
    
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
        console.log(response);
        var index = 0;
        while (response.data[index]['message'] == undefined)
          index++;
        $('.msg-princ').html(response.data[index]['message']);
        $('.img-princ').html("<img class='img-face' src=' " + response.data[index]['full_picture'] + "'/>");
        if ($(window).width() > 768) {
          index++;
          while (response.data[index]['message'] == undefined)
            index++;
          $('.msg-not1').html(response.data[index]['message']);
          $('.img-not1').html("<img class='img-face' src=' " + response.data[index]['full_picture'] + "'/>");
          index++;
          while (response.data[index]['message'] == undefined)
            index++;
          $('.msg-not2').html(response.data[index]['message']);
          $('.img-not2').html("<img class='img-face' src=' " + response.data[index]['full_picture'] + "'/>");
        }

        $('#loader').remove();
        $('.facebook-area').css('display', 'block');
        $('.not-mobile').css('min-height', '100px');

        /*
        for (i = 0; i < response.data.length && i<=3; i++) {
          if (response.data[i]['message'] != undefined)
            $('.facebook-area').append("<div class='row not'>  <div class='msg-face'> " + response.data[i]['message'] + "</div> \
          <div class='_3x-2'> <img class='img-face' src=' " + response.data[i]['full_picture'] + "'/>");
        }
        */
      }
    );
  });
  if ($(window).width() > 768) {
    $('.not1').click(function () {
      var msgPrinc = $('.msg-princ').html();
      var imgPrinc = $('.img-princ').html();

      var newMsgPrinc = $('.msg-not1').html();
      var newIMGPrinc = $('.img-not1').html();

      $('.msg-princ').html(newMsgPrinc);
      $('.img-princ').html(newIMGPrinc);
      $('.img-not1').html(imgPrinc);
      $('.msg-not1').html(msgPrinc);
    });

    $('.not2').click(function () {
      var msgPrinc = $('.msg-princ').html();
      var imgPrinc = $('.img-princ').html();

      var newMsgPrinc = $('.msg-not2').html();
      var newIMGPrinc = $('.img-not2').html();

      $('.msg-princ').html(newMsgPrinc);
      $('.img-princ').html(newIMGPrinc);
      $('.img-not2').html(imgPrinc);
      $('.msg-not2').html(msgPrinc);
    });
  }

  $('#n-more').click(function () {
    location.href = "pages/noticias/noticias.html";
  });

  $('#v-more').click(function () {
    location.href = "https://www.youtube.com/channel/UCERR4R9UhCQ2aKMBxS9VLSw";
  });
})(jQuery); // End of use strict