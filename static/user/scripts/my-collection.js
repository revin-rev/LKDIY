$('.main-checkbox input').change(function(){
   if($(this).prop('checked') == true){
      $('.user-my-collections input[type=checkbox]').attr('checked',true);
      $('.checkbox-pretty').addClass('checked');
   }else{
      $('.user-my-collections input[type=checkbox]').attr('checked',false);
      $('.checkbox-pretty').removeClass('checked');
   }
});