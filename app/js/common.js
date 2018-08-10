$(function() {

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
