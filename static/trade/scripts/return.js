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



$(document).ready(function(){
        $('input[type=text],input[type=password]','.user-form ').keyup(function(){
            var _form = $(this).parents('form');
            var _isValid = true;
            var _input = $(_form).find('input[type=text],input[type=password]');

            $(_input).each(function(){
                if($(this).val() == '' || $(this).val() == null){
                    _isValid = false;
                }
            });

            if(_isValid){
                $('.user-button',_form).addClass('user-enable');
                $('.user-button',_form).removeAttr('disabled',false);
            }else{
                $('.user-button',_form).removeClass('user-enable');
                $('.user-button',_form).attr('disabled',true);
            }





        });
        $('.user-pass-eye').click(function(){

            //console.log('clicked');

            var _form = $(this).parents('form');

            var text = $('.user-password',_form).val();
            var img = $(this).attr('src');

            if(text != '') {

                if(img == '../../static/mobile/sso/image/sso-eye.png'){
                    $('.user-password',_form).attr('type','text');
                    $('.user-pass-eye',_form).attr('src','../../static/mobile/user/images/sso-blk-eye.png');
                } else {

                    $('.user-password',_form).attr('type','password');
                    $('.user-pass-eye',_form).attr('src','../../static/mobile/user/images/sso-eye.png');
                }
            }
            //debugger;
        });



    });

