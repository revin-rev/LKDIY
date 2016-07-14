(function($){
    //Setting up Main slider
    $('#www-main-slider').bxSlider({
        controls:false,
        auto:true
    });

    //Setting up Products slider
    $('#www-products-slider').bxSlider({
        minSlides: 5,
        maxSlides: 6,
        moveSlides:1,
        slideWidth: 241,
        pager:false,
        auto:true
    });



    /********************scroll Spy START*************************/

    // Cache selectors
        var _lastId,
            _topMenu = $(".www-side-fixed"),
        // All list items
            _menuItems = _topMenu.find('a[href*="#"]:not([href="#"])'),
        // Anchors corresponding to menu items
            _scrollItems = _menuItems.map(function(){
                var _item = $($(this).attr("href"));
                if (_item.length) { return _item; }
            });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
        _menuItems.click(function(e){
            var _href = $(this).attr("href"),
                _offsetTop = _href === "#" ? 0 : $(_href).offset().top + 1;
            $('html, body').stop().animate({
                scrollTop: _offsetTop
            }, 500);
            e.preventDefault();
        });

    function getCurrentPosition(){
        // Get container scroll position
        var _fromTop = $(this).scrollTop();

        var _lastScrollLimit = $('.www-scroll-element:last').offset().top + $('.www-scroll-element:last').height() - 500;

        var _firstScrollLimit = $('.www-scroll-element:first').offset().top;

        if(_fromTop > _lastScrollLimit){
            $('.www-side-fixed').fadeOut(300);
        }else{
            if(_firstScrollLimit > _fromTop){
                $('.www-side-fixed').fadeOut(300);
            }else{
                $('.www-side-fixed').fadeIn(300);
            }
        }

        // Get id of current scroll item
        var _cur = _scrollItems.map(function(){
            if ($(this).offset().top < _fromTop)
                return this;
        });
        // Get the id of the current element
        _cur = _cur[_cur.length-1];
        var _id = _cur && _cur.length ? _cur[0].id : "";

        if (_lastId !== _id) {
            _lastId = _id;
            // Set/remove active class
            _menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+_id+"']").parent().addClass("active");
        }
    }
    // Bind to scroll
        $(window).scroll(function(){
            getCurrentPosition();
        });
        getCurrentPosition();
    /********************scroll Spy END*************************/


})(jQuery);