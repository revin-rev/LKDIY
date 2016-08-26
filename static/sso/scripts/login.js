(function($){
    $('.sui-validate').submit(function(){
       var _form = $(this);

       $(_form).find('input').each(function(){
        var _this = $(this);
        setTimeout(function() {
            if ($(_this).hasClass('input-error')) {
                $(_form).prop('style','padding-top:40px');
            } 
            /*else{
              $(_form).prop('style','padding-top:0px');
            }*/
        },10);  
        
    });
   }); 

})(jQuery);  

(function() {
    if ( navigator.userAgent.toLowerCase().indexOf('firefox') > -1 )  {
     $('.sso-login-bg-outer').css('height','550px');
   }
   if( navigator.userAgent.toLowerCase().indexOf('chrome') > -1  )
   {
    $('.sso-login-bg-outer').css('height','670px');
   }
   

 })(jQuery); 




