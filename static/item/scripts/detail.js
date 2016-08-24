(function($){

    $('.item-accordion-sub-list li a').click(function(e){
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.input-number a').click(function(e){
        e.preventDefault();

        var _this     = $(this);
        var _input    = $(_this).parent('.input-number').find('input');
        var _inputVal = parseInt($(_this).parent('.input-number').find('input').val());

        if($(_this).data('value') == 'min'){
            if(_inputVal > 0){
                _inputVal--;
            }
        }
        else{
            _inputVal++;
        }

        $(_input).val(_inputVal);

    });

    $(function() {
        $('a.scroll[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.bx-slider').bxSlider({
        minSlides:5,
        slideMargin:20,
        maxSlides:5,
        slideWidth:64,
        moveSlides:1,
        pager:false,
        infiniteLoop:false,
        hideControlOnEnd:true,
        speed:300
    });

    $('[data-item-src]').click(function(e){
        e.preventDefault();

        var _this = $(this);
        var _image = $(_this).data('item-src');
        var _placeholder = $('.item-item-product-image img');
        var _placeholderZoom = $('.item-item-product-image a.fancybox');

        $(_this).addClass('active')
                .parents('li')
                .siblings().find('a').removeClass('active');

        $(_placeholder).prop('src',_image);
        $(_placeholderZoom).prop('href',_image);
    });

    $(".fancybox").fancybox();


    $('.item-like-btn').click(function(e){
        e.preventDefault();

        $(this).find('i').toggleClass('icon-tb-like');

        if(!$(this).find('i').hasClass('icon-tb-like')){
            $('.item-success-added').fadeIn(300);

            setTimeout(function(){
                $('.item-success-added').fadeOut(300);
            },1500);
        }
    });
})(jQuery);