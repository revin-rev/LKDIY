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

    $('a.sso-link').click(function(){
      
      setTimeout(function(){
       
      location.reload(true);
      }, 10);
    })

  });

  $(document).on('click','.create-popup', function () {
    var popupHTML = '<div class="popup popup-create">'+
    '<p>退货/退款须知</p>'+
    '<div class="content-block">'+
    '<span>有时候在转分宝上购到的宝贝有质量问题，或者是买到不合适的宝贝等，导致需要操作退款。由于一些买家平时上网少，对网购流程不是很了解，因此在操作退款方面还不是很熟悉，所以，现为大家详细说下淘宝交易订单中如何申请退款。退款申请主要从以下四步进行操作:</span><br/>'+

    '<span>一、申请退款的前提条件是通过支付宝线上交易，即在“已买到的宝贝”中，生产订单，并通过支付宝付款。当订单状态为“买家已付款”或者“卖家已发货”，即可申请退款。退款申请路径在：“我的淘宝”——“已买到的宝贝”中，找到对应的订单，点击“申请退款”即可。</span><br/>'+

    '<span>二、若卖家同意退款申请，未发货的订单会直接退款成功，交易关闭。已经发货的订单，需要退货的，此时需要在退款页面点击“退货给卖家”，选择好物流，填写退货单号操作退货。当卖家拒绝了买家的退款申请：</span><br/>'+

    '<span>①：您可以进入退款管理页面，找到对应的退款交易查看退款详情，在退款详情页面提醒规定时间内及时点击“修改退款协议”；</span><br/>'+

    '<span>②：重新填写退款申请，并且上传相关退款凭证，点击“立即申请退款”，此时如果需要修改退款金额也是可以的；</span><br/>'+

    '<span>③：积极联系卖家协商，并关注退款状态和退款超</span><br/>'+

    '</div>'+
    '<a href="#" class="close-popup">确定</a>'+
    '</div>'
    $.popup(popupHTML);


  });





})(jQuery_noConflict);