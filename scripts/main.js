$(document).ready(function(){
    $('#logobox').mouseenter(function(){
        $(this).animate({
            'backgroundColor': "#92230D",
        }, 200, function(){});
    });
    $('#logobox').mouseleave(function(){
        $(this).animate({
            'backgroundColor': "#E8330F",
        }, 200, function(){});
    });
});
