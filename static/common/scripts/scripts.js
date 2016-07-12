(function($){
    //Back to top
    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        });
    });

    $(window).scroll(function(){
        if($('body').scrollTop() > 400){
            $('.back-to-top').fadeIn();
        }else{
            $('.back-to-top').fadeOut();
        }
    });

    //detect if IE

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

        return rv;
    }

    $('html').attr('data-browser',CheckVersion());
})(jQuery);