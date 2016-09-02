

jQuery(document).ready(function(){
    jQuery('input[type=text],input[type=password]','.sso-form ').keyup(function(){
        var _form = $(this).parents('form');
        var _isValid = true;
        var _input = $(_form).find('input[type=text],input[type=password]');

        $(_input).each(function(){
            if($(this).val() == '' || $(this).val() == null){
                _isValid = false;
            }
        });
        
        if(_isValid){
                    jQuery('.sso-button',_form).addClass('sso-enable');
                    jQuery('.sso-button',_form).attr('disabled',true);
        }else{
                    jQuery('.sso-button',_form).removeClass('sso-enable');
                    jQuery('.sso-button',_form).removeAttr('disabled');

        }


       
        

    });
   jQuery('.sso-pass-eye').click(function(){

       //console.log('clicked');

       var _form = $(this).parents('form');
       
       var text = jQuery('.sso-password',_form).val();
       var img = jQuery(this).attr('src');
   
          if(text != '') {
            
          if(img == '../../static/mobile/sso/image/sso-eye.png'){
               jQuery('.sso-password',_form).attr('type','text');
               jQuery('.sso-pass-eye',_form).attr('src','../../static/mobile/sso/image/sso-blk-eye.png');
           } else {
               
               jQuery('.sso-password',_form).attr('type','password');
               jQuery('.sso-pass-eye',_form).attr('src','../../static/mobile/sso/image/sso-eye.png');
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


  

