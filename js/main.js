(function ($) {
  "use strict"; // Start of use strict
  /*
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
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
  */
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


  /*
    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    });
  */
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

  if ($(window).width() > 1024) {
    $('.slider').css('height', $(window).height() - $('#mainNav').height() - $('.top-bar').height() - 50);
    $('.carousel-inner').css('width', $(window).width() - $(window).width() * 30 / 100);
    $('.carousel-inner').css('margin-left', $(window).width() * 15 / 100)
    $('.slider').css('width', '50%');
    $('.slider').css('max-height', $(window).width() * 23 / 100);

    $(window).resize(function () {
      $('.slider').css('height', $(window).height() - $('#mainNav').height() - $('.top-bar').height() - 50);
      $('.carousel-inner').css('width', $(window).width() - $(window).width() * 30 / 100);
      $('.carousel-inner').css('margin-left', $(window).width() * 15 / 100)
      $('.slider').css('width', '50%');
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
        for (i = 0; i < response.data.length; i++) {
          if (response.data[i]['message'] != undefined)
            $('.facebook-area').append("<div class='teste'>  <div class='msg-face'> " + response.data[i]['message'] + "</div> \
          <div class='_3x-2'> <img class='img-face' src=' " + response.data[i]['full_picture'] + "'/>");
        }
      }
    );
  });


})(jQuery); // End of use strict