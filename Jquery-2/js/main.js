$(document).readay(function(){
    $('#btn-next').click(function(event){
        var slider_affter = $('.active').next();
        $('.active').addClass('hide-right');
        slider_affter.addClass('.active').addClass('in-left')

    });

});