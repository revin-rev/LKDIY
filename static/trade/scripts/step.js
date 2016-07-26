$('.trade-step-label').each(function(){
    if($(this).is('.trade-step-label:last')){
        $(this).css('right',- (($(this).width() / 2) - 16 ));
    }else{
        $(this).css('left',- (($(this).width() / 2) - 16 ));
    }
});