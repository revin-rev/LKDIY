var global = (function(){
    var _o = {
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
            _o.backToTop();
        }
    };
    return _o;
})();

$(function(){
    global.init();
});