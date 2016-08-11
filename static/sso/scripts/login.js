(function($){
    $('.sui-validate').submit(function(){
       var _form = $(this);

       $(_form).find('input').each(function(){
        var _this = $(this);
        setTimeout(function() {
            if ($(_this).hasClass('input-error')) {
                $(_form).prop('style','padding-top:40px');
            } 
        },10);  
        
    });
   }); 

})(jQuery);    