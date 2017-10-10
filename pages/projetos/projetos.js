(function ($) {
    "use strict";

    $(window).on('beforeunload', function () {
        $(window).scrollTop(0);
    });

    if ($(window).width() > 1024)
        var numProjetos = 11;
    else
        var numProjetos = 6;


    var flagAnimation = $('.previous-page').attr('value');

    $('.projetos').css('color', '#920f12');
    $('.projetos').css('border-bottom-color', '#920f12');

    $('.list-projetos').css('margin-top', '4em');

    $('html').css('overflow-y', 'auto');

    if ($(window).width() >= 768)
        $('body').css('margin-bottom', $('footer').height() + "px");

    if ($(window).width() <= 1024) {
        $('.mapa').html('<div id="mapa-mobile"></div>')
    }

    for (var i = numProjetos + 1; i <= 21; i++) {
        $('#heading' + i).closest('.card').css('display', 'none');
    }

    var numPages = Math.ceil(21 / numProjetos);
    for (var i = 0; i < numPages; i++) {
        $('.pagination').append('<li class="page-item page"><a class="page-link" value=' + (i + 1) + ' href="#">' + (i + 1) + '</a></li>');
    }
    $('.pagination').append('<li class="page-item"><a class="page-link next-page" href="#" aria-label="Next"><span class="icon-page" aria-hidden="true">&raquo;</span><span class="sr-only">Next</span></a></li>');
    editPageActive(1);

    $('.next-page').click(function () {
        $('.previous-page').closest('.page-item').removeClass('disabled');
        var next = parseInt($('.page-item.active').find('.page-link').text().split('(')[0]) + 1;
        for (var i = (next - 1) * numProjetos + 1; i <= (next) * numProjetos && i <= 21; i++) {
            $('#heading' + i).closest('.card').css('display', 'block');
            $('#heading' + (i - numProjetos)).closest('.card').css('display', 'none');
        }
        flagAnimation = $('.previous-page').attr('value');
        if (flagAnimation == "true") {
            $('#accordion').toggle("slide");
            setTimeout(function () {
                $('#accordion').toggle("slide");
            }, 50);

        }
        if (next == numPages)
            $('.next-page').closest('.page-item').addClass('disabled');
        editPageActive(next);

    });

    $('.previous-page').click(function () {
        $('.next-page').closest('.page-item').removeClass('disabled');
        var previous = parseInt($('.page-item.active').find('.page-link').text().split('(')[0]) - 1;
        var aux = (previous + 1) * numProjetos;
        if (aux > 21)
            aux = 21

        for (var i = aux; i > (previous) * numProjetos && i > 0; i--) {
            $('#heading' + i).closest('.card').css('display', 'none');
            $('#heading' + (i - numProjetos)).closest('.card').css('display', 'block');
        }
        flagAnimation = $('.previous-page').attr('value');
        if (flagAnimation == "true") {
            $('#accordion').toggle("slide");
            setTimeout(function () {
                $('#accordion').toggle("slide");
            }, 50);

        }
        if (previous == 1)
            $('.previous-page').closest('.page-item').addClass('disabled');
        editPageActive(previous);
    });

    $('.page').click(function () {

        var active = parseInt($('.page-item.active').find('.page-link').text().split('(')[0]);
        var atual = $(this).find('.page-link').attr('value');
        var diff = active - atual;
        $('.previous-page').attr('value', 'false');
        if (diff > 0)
            for (var i = 0; i < diff; i++) {
                if (i == diff - 1)
                    $('.previous-page').attr('value', 'true');
                $('.previous-page').click();
            }
        else
            for (var i = 0; i < diff * -1; i++) {
                if (i == diff * -1 - 1)
                    $('.previous-page').attr('value', 'true');
                $('.next-page').click();
            }
    });



    function editPageActive(index) {
        var older = $('.page-item.active');

        if (older.length > 0) {
            var value = older.find('.page-link').text().split('(')[0];
            older.removeClass('active');
            older.html('<a class="page-link" value=' + value + ' href="#">' + value + '</a>');

        }
        var choose = $('.page-link[value=' + index + ']').closest('.page-item');
        choose.addClass('active')
        choose.html('<span class="page-link">' + index + '<span class="sr-only">(current)</span></span>');
    }

})(jQuery); // End of use strict