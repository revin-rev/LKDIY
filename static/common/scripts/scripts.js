(function($){
    //Back to top
    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        });
    });

    function backToTop(){
        var _top = 0;

        if($('body').scrollTop() <= 0){
            _top = $('html').scrollTop();
        }else{
            _top = $(' body').scrollTop();
        }
        if(_top > 400){
            $('.back-to-top').fadeIn();
        }else{
            $('.back-to-top').fadeOut();
        }
    }

    $(window).scroll(function(){
        backToTop();
    });

    backToTop();

    //detect if IE then load css

    function CheckVersion(){
        var rv = -1; // Return value assumes failure.
        if (navigator.appName == 'Microsoft Internet Explorer'){

            var ua = navigator.userAgent,
                re  = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");

            if (re.exec(ua) !== null){
                rv = parseFloat( RegExp.$1 );
            }
        }
        else if(navigator.appName == "Netscape"){
            /// in IE 11 the navigator.appVersion says 'trident'
            /// in Edge the navigator.appVersion does not say trident
            if(navigator.appVersion.indexOf('Trident') === -1) rv = 12;
            else rv = 11;
        }

        if(rv == 8 || rv == 9 || rv == 10 || rv == 11){
            url = '../../static/common/css/ie-global.css';
            if (document.createStyleSheet)
            {
                document.createStyleSheet(url);
            }
            else
            {
                $('<link rel="stylesheet" type="text/css" href="' + url + '" />').appendTo('head');
            }
        }

        return rv;
    }

    $('html').attr('data-browser',CheckVersion());

    //set vertical align middle loading Image
    $('.loading-img').css('top', ($(window).height() / 2) - 83 );



    /***********************Filters START*********************/
    //demo label objects
    var _demoLabels = ['Demo1','Demo2','Demo3','Demo4','Demo5','Demo6'];

    //multiple option button
    $('.item-multiple-btn').click(function(e){
        e.preventDefault();

        var _this = $(this);
        var _btnList = '<li class="item-input-lists item-more-filter"> <input type="button" disabled="true" name="confirm" value="确认" class="item-input-button item-btn-active item-confirm-btn"> <input type="button" value="取消" class="item-input-button item-cancel-btn"> </li>';

        if(!$(_this).hasClass('active')){
            $(_this).parents('.item-form-filters-row').addClass('item-active-row');
            $(_this).parents('.item-form-filters-row').find('ul li label.inline').removeClass('item-hide-check');
            $(_this).parents('.item-form-filters-row').find('ul li label.inline').removeClass('radio-pretty').addClass('checkbox-pretty');
            $(_this).parents('.item-form-filters-row').find('ul li label.inline input').prop('type','checkbox');
            $(_this).parents('.item-form-filters-row').find('ul').append(_btnList);
        }else{
            $(_this).parents('.item-form-filters-row').removeClass('item-active-row');
            $(_this).parents('.item-form-filters-row').find('ul li label.inline').addClass('item-hide-check');
            $(_this).parents('.item-form-filters-row').find('ul li label.inline').addClass('radio-pretty').removeClass('checkbox-pretty');
            $(_this).parents('.item-form-filters-row').find('ul li label.inline input').prop('type','radio');
            $(_this).parents('.item-form-filters-row').find('ul li.item-input-lists').remove();
        }

        $(_this).toggleClass('active');
    });

    //hide multiple Options
    $(document).on('click','.item-cancel-btn',function(){
        var _this = $(this);

        $(_this).parents('.item-form-filters-row').removeClass('item-active-row');
        $(_this).parents('.item-form-filters-row').find('ul li label.inline').addClass('item-hide-check');
        $(_this).parents('.item-form-filters-row').find('ul li label.inline').addClass('radio-pretty').removeClass('checkbox-pretty');
        $(_this).parents('.item-form-filters-row').find('ul li label.inline input').prop('type','radio');
        $(_this).parents('.item-form-filters-row').find('.item-multiple-btn').toggleClass('active');
        $(_this).parents('.item-form-filters-row').find('ul li.item-input-lists').remove();
    });

    $(document).on('click','.item-confirm-btn',function(){
        var _this           = $(this);
        var _rowLabel       = $(_this).parents('.item-form-filters-row').find('.item-title-label').text();
        var _rowLabelId     = $(_this).parents('.item-form-filters-row').prop('id');
        var _values         = '';
        var _inputs         = $(_this).parents('.item-form-filters-row').find('ul input');

        $.each(_inputs,function(index,element){
            if($(this).is(':checked')){
                _values += ' ' + element.value + ',';
            }
        });

        _values = _values.replace(/,\s*$/, "");

        //hide if input is radio
        $(_this).parents('.item-form-filters-row').slideUp(200);
        var _label = '<label class="item-tag" data-target-row="' + _rowLabelId + '">' + _rowLabel + ' <span>' + _values + '</span> <span class="item-remove"><i class="sui-icon icon-tb-close"></i></span></label>';

        //Append Label after selecting
        $('.item-selected-filters').append(_label);


    });

    //add more labels
    $('.item-more-btn').click(function(e){
        e.preventDefault();

        var _this = $(this);

        if(!$(_this).hasClass('active')){

            $.each(_demoLabels,function(index,value){
                var _last = $(_this).parents('.item-form-filters-row').find('li').has('label.inline').last().clone();

                if($(_this).parents('.item-form-filters-row').find('.item-multiple-btn').hasClass('active')){
                    $(_this).parents('.item-form-filters-row').find('ul li.item-input-lists').before(_last);
                }else{
                    $(_this).parents('.item-form-filters-row').find('ul').append(_last);
                }
                _last       = $(_this).parents('.item-form-filters-row').find('li').has('label.inline').last();

                $(_last).find('input').prop('value',value)
                    .end()
                    .find('span').text(value);
            });

        }else{
            $.each(_demoLabels,function(index,value){
                var _elementToDelete = $(_this).parents('.item-form-filters-row').find('[value="'+ value +'"]').parents('li').remove();
            });
        }

        $(_this).toggleClass('active');
        $(_this).find('span').toggleClass('icon-sort-up');
    });

    //remove filter tag
    $(document).on('click','.item-tag',function(e){
        var _rowID = $(this).data('target-row');
        $('#'+ _rowID).slideDown().find('input').prop('checked',false)
            .end()
            .find('label.inline').removeClass('checked');
        $(this).remove();
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
            $(_this).parents('.item-form-filters-row').slideUp(200);
            var _label = '<label class="item-tag" data-target-row="' + _rowLabelId + '">' + _rowLabel + ' <span>' + _value + '</span> <span class="item-remove"><i class="sui-icon icon-tb-close"></i></span></label>';

            //Append Label after selecting
            $('.item-selected-filters').append(_label);

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