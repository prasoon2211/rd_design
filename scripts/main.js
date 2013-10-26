$(document).ready(function(){
    $('#navbar a').mouseenter(function(){
        $(this).animate({
            'backgroundColor': "#f6f6f6",
        }, 250, function(){});
    });
    $('#navbar a').mouseleave(function(){
        $(this).animate({
            'backgroundColor': "#fff",
        }, 250, function(){});
    });
});
