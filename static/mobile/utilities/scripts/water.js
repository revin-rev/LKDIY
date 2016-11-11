$(document).on('click','.create-popup', function () {
  var popupHTML = '<div class="popup">'+
  '<div class="content-block">'+
  '<p>缴费单位</p>'+
  '<ul>'+
  '<li class="popup-vat">缴费单位1</li>'+
  '<li class="popup-vat">缴费单位2</li>'+
  '<li class="popup-vat">缴费单位3</li>'+
  '<li class="popup-vat">缴费单位4</li>'+
  '<li class="popup-vat">缴费单位5</li>'+
  '</ul>'+
                      //'<h2 class="mar_gaya">退货原因5</h2>'+
                      '</div>'+
                      '<a href="#" class="close-popup">取消</a>'+
                      '</div>'
                      $.popup(popupHTML);


                    });

$(document).on('click','.create-popup-area', function () {
  var popupHTML = '<div class="popup popup-area">'+
  '<div href="#" class="back-to-prev-btn"><span class="icon icon-left pull-left"></span><p class="popup-top-class">选择地区</p></div>'+
  
  '<div class="content-block content-block-border">'+
  '<ul>'+
  '<li class="popup-vat-area">北京 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">天津 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">河北省 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">山西省 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">内蒙古自治区 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">辽宁省 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">吉林省 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">黑龙江省 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">上海 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">江苏省 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">浙江省 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">安徽省 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">南京市 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">无锡市 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">徐州市 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">常州市 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">苏州市 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">南通市 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">连云港市 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '<li class="popup-vat-area">淮安市 <span class="icon icon-right pull-right area-padding-rhgt"></span></li>'+
  '</ul>'+
                      //'<h2 class="mar_gaya">退货原因5</h2>'+
                      '</div>'+
                      

                      '<a href="#" class="close-popup">取消</a>'+
                      '</div>'
                      $.popup(popupHTML);


                    });
$('body').on('click','.popup-vat-area',function(){
  $('.order-spec-text-changed-area').text($(this).text());
  $('.close-popup').trigger('click');
  $('.close-popup').click();
});

$('body').on('click','.popup-vat',function(){
  $('.order-spec-text-changed').text($(this).text());
  $('.close-popup').trigger('click');
  $('.close-popup').click();
});


$(document).ready(function(){
  $('.order-spec-text-changed-news').click(function(){
    $('.aa').hide();
    $('.order-spec-text-changed-news').show();
    $('.utilities-mar-top').css('margin-top','7px;')


    var label = $(this);
    
    $(this).hide();
    $(this).next().show();
   // 
 });
});