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

    (function($) {
        $('.franchise-slider').slick({
            dots: false,
            // infinite: true,
            rtl: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            // centerMode: true,
            prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>',
            // variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        });
    })(jQuery);
    ////slider for category in menu pages
    function slyck_category() {
        $('.menu-category-slider').slick({
            dots: true,
            // infinite: true,
            rtl: true,
            speed: 300,
            slidesToShow: 7,
            slidesToScroll: 1,
            // centerMode: true,
            prevArrow: '<span class="slick-prev"></span>',
            nextArrow: '<span class="slick-next"></span>',
            // variableWidth: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }
            ]
        });
    };

    $(document).ready(function(){
        if($(window).width() < 992) {
            slyck_category();
        } else {
            $('.menu-category-slider').slick('unslick');
        }
        $(window).resize(function(){
            if($(window).width() < 992) {
                slyck_category();
            } else {
                $('.menu-category-slider').slick('unslick');
            }
        });
    });

//scroll sections animation for food-truck-page
    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        if($height > 300) {
            $('.car-lier').addClass('scroll-section');
        } else {
            $('.car-lier').removeClass('scroll-section');
        }
        // console.log($height);
    });

    // $('.food-truck-for-work-section').offset().top;
    // console.log($('.food-truck-for-work-section').offset().top);


//franchising page tabs
    (function($) {
        // $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('ul.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('h3.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content2').removeClass('active').eq($(this).index()).addClass('active');
        });

        // });
    })(jQuery);
    $(".menu-lisy").click(function() {
        // $(".tabs__caption").slideToggle();
        $(".menu-lisy").toggleClass('menu-active');
    });


//========== custom select =================
    $(".custom-select").each(function() {
        var classes = $(this).attr("class"),
            id      = $(this).attr("id"),
            name    = $(this).attr("name");
        var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function() {
        $('html').one('click',function() {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
//==========================================

//========= branch page active trigger ============
    $(".wrap-title").click(function() {
        $(this).parents('.item').toggleClass("active");
        // $(".active .wrap-content-section").slideToggle();
        // y = 320;

        // $('.active').animate();
        // $('.active').animate({ "height": y }, 500 );


            // $( ".active" ).animate({
            //     opacity: 0.25,
            //     height: "toggle"
            // }, 5000, function() {
            //     // Animation complete.
            // });



        // return false;
    });


//============ more buttons =============
    $( document ).ready(function () {
        $(".moreBox").slice(0, 4).show();
        if ($(".blogBox:hidden").length != 0) {
            $("#loadMore").show();
        }
        $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".moreBox:hidden").slice(0, 5).slideDown();
            if ($(".moreBox:hidden").length == 0) {
                $("#loadMore").fadeOut('slow');
            }
        });
    });

});


