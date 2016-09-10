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
 
 	
$("#checkAll").click(function () {
 		$('input:checkbox').not(this).prop('checked', this.checked);
});
	
 	
 });
})(jQuery_noConflict)