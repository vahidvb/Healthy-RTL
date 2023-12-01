$(document).ready(function (){
    $('[data-toggle=tooltip]').tooltip();
    wow = new WOW().init();
    $('.loading').delay(2000).fadeOut('slow');
    $('.search').click(function(){
        $('.search-box').css('transform', 'translateY(0)');
        $('.hide_search').css('transform', 'translateY(0)');
        $('#search-tooltip').tooltip('hide');
    })
    $('.close-btn').click(function(){
        $('.search-box').css('transform', 'translateY(-150%)');
        $('.hide_search').css('transform', 'translateY(-200%)');
    });
    $('.hide_search').click(function(){
        $('.search-box').css('transform', 'translateY(-150%)');
        $('.hide_search').css('transform', 'translateY(-200%)');
    });
    $('.toggle_menu').click(function () {
        $(this).addClass('.close-icon');
        $('.close-icon').click(function () {
          $(this).removeClass('.close-icon');
        });
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('.header-nav').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('.header-nav').removeClass('sticky');
        }
    });
    $(".btn-up").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    })
    $('.team-carousel').owlCarousel({
        loop: false,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $('.customer-carousel').owlCarousel({
        loop: false,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
		  navText: [" <img src=\"img/black_arrow_right.png\" alt=\"arrow\">"," <img src=\"img/black_arrow_right.png\" alt=\"arrow\">"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $('.news-carousel').owlCarousel({
        loop: false,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });
    $(".btn-up").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    })
})