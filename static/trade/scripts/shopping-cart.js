 $(document).ready(function(){
    $('.increment').click(function(){
        var value = $(this).prev().val();
        value = parseInt(value) + 1;
        $(this).prev().val(value);
    });
    $('.decrement').click(function(){
        var value = $(this).next().val();
        value = parseInt(value)- 1;
        $(this).next().val(value);
        
    });
});