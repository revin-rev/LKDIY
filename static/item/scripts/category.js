(function($){
    /*---- adding active class to accordion heading ----*/
    $('.item-digital-office-sidebar .panel-heading a').click(function(){
        if(!$(this).parents('.panel-heading').hasClass('active')){
            $(this).parents('.panel-heading').addClass('active');
        }else{
            $(this).parents('.panel-heading').removeClass('active');
        }
    });


    $('.item-accordion-sub-list li a').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    /***********************Filters START*********************/

        //multiple option button
    $('.item-multiple-btn').click(function(e){
        e.preventDefault();

        var _this = $(this);

        $(_this).parents('.item-form-filters-row').toggleClass('item-active-row');
        $(_this).toggleClass('active');
    });

    //hide multiple Options
    $(document).on('click','.item-cancel-btn',function(){
        var _this = $(this);

        $(_this).parents('.item-form-filters-row').toggleClass('item-active-row');
        $(_this).parents('.item-form-filters-row').find('.item-multiple-btn').toggleClass('active');
    });

    $(document).on('click','.item-confirm-btn',function(){
        var _this           = $(this);
        var _rowLabelId     = $(_this).parents('.item-form-filters-row').prop('id');

        //hide if input is radio
        $(_this).parents('.item-form-filters-row').slideUp(100);

        //show label
        $('[data-target-row='+_rowLabelId+'].item-multiple-tag').fadeIn(100);

    });

    //add more labels
    $('.item-more-btn').click(function(e){
        e.preventDefault();
        var _this = $(this);
        $(_this).parents('.item-form-filters-row').find('.item-checkbox-radio-list ul').toggleClass('item-max-height');
        $(_this).toggleClass('active')
                .find('span').toggleClass('icon-sort-up');
    });

    //remove filter tag
    $(document).on('click','.item-tag',function(e){
        var _rowID = $(this).data('target-row');
        $('#'+ _rowID).slideDown(100).find('input').prop('checked',false)
            .end()
            .find('label.inline').removeClass('checked');
        $(this).fadeOut(100);
    });

    $('.item-price-btn').click(function(evt){
        var _this           = $(this);
        evt.stopPropagation();
        evt.preventDefault();

        //hide if input is radio
        $(_this).parents('.item-form-filters-row').slideUp(100);

        var _id = $(_this).parents('.item-form-filters-row').prop('id');

        $('[data-target-row='+_id+'].item-single-tag').fadeIn(100);

        //check input
        $(_this).find('input').prop('checked',true);

        //unCheck other inputs
        $(_this).parent('li').siblings().find('input').prop('checked',false);
    });


    //add a filter tag
    $(document).on('click','.item-checkbox-radio-list label.inline',function(evt){
        var _this           = $(this);
        var _rowLabel       = $(_this).parents('.item-form-filters-row').find('.item-title-label').text();
        var _rowLabelId     = $(_this).parents('.item-form-filters-row').prop('id');
        var _value          = $(_this).find('input').get(0).value;

        //check if label type is radio
        if($(_this).hasClass('item-hide-check')){
            //stop double firing of event
            evt.stopPropagation();
            evt.preventDefault();

            //hide if input is radio
            $(_this).parents('.item-form-filters-row').slideUp(100);

            var _id = $(_this).parents('.item-form-filters-row').prop('id');

            $('[data-target-row='+_id+'].item-single-tag').fadeIn(100);

            //check input
            $(_this).find('input').prop('checked',true);

            //unCheck other inputs
            $(_this).parent('li').siblings().find('input').prop('checked',false);

        }

        //set disable confirm button if not selected
        if($(_this).parents('.item-form-filters-row').hasClass('item-active-row')){
            if($(_this).find('input:checked').length == 0){
                $(_this).parents('.item-form-filters-row').find('.item-confirm-btn').prop('disabled',true);
            }else{
                $(_this).parents('.item-form-filters-row').find('.item-confirm-btn').prop('disabled',false);
            }
        }
    });

    /***********************Filters END*********************/
})(jQuery);