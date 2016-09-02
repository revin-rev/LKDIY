var pageModule = (function(){
    var _o = {
        initSlider: function(){
            //Setting up Main slider
            $('#main-slider').bxSlider({
                controls:false,
                auto:true
            });
        },
        matchHeight: function($parent,$child){
            $(window).on('resize', function(){
                // Cache the highest
                var highestBox = 0;
                // Select and loop the container element of the elements you want to equalise
                $($parent).each(function(){

                    // Select and loop the elements you want to equalise
                    $($child, $(this)).each(function(){
                        $(this).css('height', 'auto');
                        // If this box is higher than the cached highest then store it
                        if($(this).height() > highestBox) {
                            highestBox = $(this).height();
                        }
                    });

                    // Set the height of all those children to whichever was highest
                    $($child, $(this)).each(function() {
                        $(this).height(highestBox);
                    });
                });
            }).trigger('resize');
        },
        backToTop: function(){
            $('.content').scroll(function(){
                if($('.content').scrollTop() > 150){
                    $("[href='#top']").fadeIn();
                }else{
                    $("[href='#top']").fadeOut();
                }
            }).trigger('scroll');

            $("[href='#top']").click(function(){
                $(".content").animate({ scrollTop: 0 }, 600);
                return false;
            });
        },
        init: function(){
            _o.initSlider();
            _o.matchHeight('.www-products-container-full-height .row','.www-product-col');
            _o.backToTop();
        }
    };
    return _o;
})();

$(function(){
    pageModule.init();
});