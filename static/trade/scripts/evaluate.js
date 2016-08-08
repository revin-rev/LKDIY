$('.trade-stars').barrating();
$('.trade-btn-evaluate').click(function(e){
        e.preventDefault();

        $(this).parents('.trade-single-order-detail-row').find('.trade-evaluate-form').slideToggle();
});