(function(){
    $(document).ready(function(){
        $('input[type=text],input[type=password]','.sso-form ').keyup(function(){
            var _form = $(this).parents('form');
            var _isValid = true;
            var _input = $(_form).find('input[type=text],input[type=password]');

            $(_input).each(function(){
                if($(this).val() == '' || $(this).val() == null){
                    _isValid = false;
                }
            });

            if(_isValid){
                $('.sso-button',_form).addClass('sso-enable');
                $('.sso-button',_form).removeAttr('disabled',false);
            }else{
                $('.sso-button',_form).removeClass('sso-enable');
                $('.sso-button',_form).attr('disabled',true);
            }





        });
        $('.sso-pass-eye').click(function(){

            //console.log('clicked');

            var _form = $(this).parents('form');

            var text = $('.sso-password',_form).val();
            var img = $(this).attr('src');

            if(text != '') {

                if(img == '../../static/mobile/sso/image/sso-eye.png'){
                    $('.sso-password',_form).attr('type','text');
                    $('.sso-pass-eye',_form).attr('src','../../static/mobile/sso/image/sso-blk-eye.png');
                } else {

                    $('.sso-password',_form).attr('type','password');
                    $('.sso-pass-eye',_form).attr('src','../../static/mobile/sso/image/sso-eye.png');
                }
            }
            //debugger;
        });



    });

    $(document).on('click','.open-3-modal', function () {
        $.modal({
            title:  '转分宝服务条款',
            text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
            buttons: [
                {
                    text: 'B1',
                    onClick: function() {
                        $.alert('You clicked first button!')
                    }
                }


            ]
        })
    });





})(jQuery_noConflict);