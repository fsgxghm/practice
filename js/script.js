$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 4000 });
});

$(document).ready(function () {
    $('#collapse-button').click(function () {
        if ($('#collapse-button').children('span').hasClass('fa-plus')) {
            $()
            $('#collapse-button').children('span').removeClass('fa-plus');
            $('#collapse-button').children('span').addClass('fa-minus');
        }
        else if ($('#collapse-button').children('span').hasClass('fa-mius')) {
            $('#collapse-button').children('span').removeClass('fa-minus');
            $('#collapse-button').children('span').addClass('fa-plus');
        }
    });
});