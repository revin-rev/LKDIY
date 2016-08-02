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

    //dropDown validation error
    $('span.sui-dropdown.dropdown-bordered.select input').change(function(){
        var _this = $(this);
        setTimeout(function(){
            if($(_this).hasClass('input-error')){
                $(_this).parents('.dropdown-inner').addClass('input-error');
            }else{
                $(_this).parents('.dropdown-inner').removeClass('input-error');
            }
        },10);
    });

    $('.sui-validate').submit(function(){
        $form = $(this);
        $($form).find('span.sui-dropdown.dropdown-bordered.select input').each(function(){
            var _this = $(this);
            setTimeout(function() {
                if ($(_this).hasClass('input-error')) {
                    $(_this).parents('.dropdown-inner').addClass('input-error');
                } else {
                    $(_this).parents('.dropdown-inner').removeClass('input-error');
                }
            },10);
        });
    });


})(jQuery);