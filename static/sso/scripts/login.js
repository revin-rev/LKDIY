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

    $('.sui-validate input').bind('keyup  blur',function(){
        var _form = $(this).parents('form');
        var isValid  = true;

        $(_form).find('input').each(function(){
            var _this = $(this);

            setTimeout(function() {
                if ($(_this).hasClass('input-error')) {
                    isValid = false;
                }
            },15);
        });

        setTimeout(function(){
            if(isValid){
                $(_form).attr('style','padding-top:0');
            }else{
                $(_form).attr('style','padding-top:40px');
            }

            if($('input.input-error').length >=  2){
                $('.main-error').show(0);
            }else{
                $('.main-error').hide(0);
            }
        },20);
    });

})(jQuery);  






