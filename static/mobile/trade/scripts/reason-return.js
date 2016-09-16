$(document).on('click','.create-popup', function () {
  var popupHTML = '<div class="popup">'+
                    '<div class="content-block">'+
                      '<p>退货原因.</p>'+
                      '<h2>退货原因1</h2>'+
                      '<h2>退货原因2</h2>'+
                      '<h2>退货原因3</h2>'+
                      '<h2>退货原因4</h2>'+
                      '<h2 class="mar_gaya">退货原因5</h2>'+
                      

                      
                    '</div>'+
                    '<a href="#" class="close-popup">取消</a>'+
                  '</div>'
  $.popup(popupHTML);


});
$(document).on('click','.create-popup-logistic', function () {
  var popupHTML = '<div class="popup">'+
                    '<div class="content-block">'+
                      '<p>物流公司</p>'+
                      '<h2>退货原因1</h2>'+
                      '<h2>退货原因2</h2>'+
                      '<h2>退货原因3</h2>'+
                      '<h2>退货原因4</h2>'+
                      '<h2 class="mar_gaya">退货原因5</h2>'+
                      

                      
                    '</div>'+
                    '<a href="#" class="close-popup">取消</a>'+
                  '</div>'
  $.popup(popupHTML);


});

$(document).ready(function(){
$('input[name="locationthemes"]:checked').each(function() {
   console.log(this.value); 
});
});