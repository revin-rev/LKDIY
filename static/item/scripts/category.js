(function($){
    /*---- adding active class to accordion heading ----*/
    $('.item-digital-office-sidebar .panel-heading a').click(function(){
        console.log($(this).parent());
        if(!$(this).parents('.panel-heading').hasClass('active')){
            $(this).parents('.panel-heading').addClass('active');
        }else{
            $(this).parents('.panel-heading').removeClass('active');
        }
    });

})(jQuery);