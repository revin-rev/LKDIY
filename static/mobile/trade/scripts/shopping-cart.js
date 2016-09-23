(function($){

	 $(document).ready(function(){
 	
 	$('.increment').click(function(){
 		var value = $(this).prev().val();
 		if (!isNaN(value)){
 			value = parseInt(value) + 1;
 			$(this).prev().val(value);
 		}
 	});
 	$('.decrement').click(function(){
 		var value = $(this).next().val();
 		if (!isNaN(value) && value > 0){
 			value = parseInt(value)- 1;
 			$(this).next().val(value);
 		}
 	});

 	$(".shopping-cart-form-checkbox").click(function () {
 		//alert('ASDASDASD');
 		$('input:checkbox').not(this).prop('checked', this.checked);
 	});

 	
 
 	
 	
	
 	
 });
})(jQuery_noConflict);

$(document).on('click','.confirm-ok', function () {
	$.confirm('您的账户积分余额不足以支付此商品，是否同意使用现金抵扣购买？');
});