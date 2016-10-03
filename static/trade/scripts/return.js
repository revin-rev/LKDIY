$('.trade-step-label').each(function(){
        $(this).css('left',- (($(this).width() / 2) - 16 ));
});

$('a[href="#return"]').click(function(){
        $('.trade-steps-4').show(0,function(){
                $('.trade-step-label').each(function(){
                        $(this).css('left',- (($(this).width() / 2) - 16 ));
                });
        });
        $('.trade-steps-3').hide();
});
$('a[href="#refund"]').click(function(){
        $('.trade-steps-4').hide();
        $('.trade-steps-3').show(0,function(){
                $('.trade-step-label').each(function(){
                        $(this).css('left',- (($(this).width() / 2) - 16 ));
                });
        });
});

