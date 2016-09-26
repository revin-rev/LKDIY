 $(document).ready(function(){
 	$('.increment').click(function(){
 		var value = $(this).prev().val();
 		if (!isNaN(value)){
 			value = parseInt(value) + 1;
 			$(this).prev().val(value);
 		}
        $(this).siblings('.decrement').attr('disabled',false);
 	});
 	$('.decrement').click(function(){
 		var value = $(this).next().val();
            value = parseInt(value) - 1;
            $(this).next().val(value);
 		if (!isNaN(value) && value < 2){
            $(this).attr('disabled',true);
 		}
 	});
 	$("#checkAll").click(function () {
 		$('input:checkbox').not(this).prop('checked', this.checked);
 	});
 });