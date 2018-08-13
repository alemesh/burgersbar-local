$(function() {

    //meny mobile
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        // return false;
    });
    //mobile menu scroll
    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 0){
            $('.toggle-mnu').addClass('background-button');
        }
        if(scrolled <= 0){
            $('.toggle-mnu').removeClass('background-button');
        }
    };

	// Custom JS
    (function($) {
        $('.variable-width').slick({
            dots: false,
            infinite: true,
            // rtl: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
            prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>',
            // variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000
        });
    })(jQuery);

});
