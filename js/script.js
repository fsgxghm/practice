$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-button").click(function () {
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');
        }
    });
});

$(document).ready(function () {
    $('#panel-faq').click(function () {
        if ($('#panel-faq').children('span').hasClass('fa-plus')) {
            $('#panel-faq').children('span').removeClass('fa-plus');
            $('#panel-faq').children('span').addClass('fa-minus');
        }
        else if ($('#panel-faq').children('span').hasClass('fa-mius')) {
            $('#panel-faq').children('span').removeClass('fa-minus');
            $('#panel-faq').children('span').addClass('fa-plus');
        }
    });
});