$(document).ready(function() {
    // Slider handler
    var owl = $('.owl-carousel');

    // This event MUST BE called before initialization
    owl.on('initialized.owl.carousel', function(event) {
        $(".owl-item.active [data-animation]").each(function() {
            $(this).addClass('animated ' + $(this).data('animation'));
        });
    });

    // Initialize slider
    owl.owlCarousel({
        loop: true, /* Go to the first slide after reaching the last one */
        items: 1, /* Number of visible slides */
        nav: true, /* Show navigation arrows */
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        dots: false, /* Hide navigation dots */
        autoplay: true, /* Automatically start playing */
        autoplayTimeout: 7000, /* Time after the slide will be changed */
        autoplaySpeed: 0,
        smartSpeed: 0, // to block sliding,
        mouseDrag: false, // block mouse dragging to enable selection
        touchDrag: false // block touch dragging to enable selection
    });

    // On slide change
    owl.on('changed.owl.carousel', function(e) {
        // Remove previous animation class
        $(".owl-item").find('.animated').each(function() {
            $(this).removeClass('animated ' + $(this).data('animation'));
        });

        // Add Current animation class
        $('.owl-item').eq(e.item.index).find('[data-animation]').each(function() {
            $(this).addClass('animated ' + $(this).data('animation'));
        });
    });

    // Toggle login modal
    $('#login_switch').on('click',function() {
        $('.rh_login_modal').slideToggle(300);
    });

    // Toggle dropdown menu
    $('.rh_dropdown_menu').on('click', function() {
        $('.rh_dropdown').not($('.rh_dropdown', this)).css('display','none');
        $('.rh_dropdown', this).slideToggle(300);
    });

    $('.owl-item, .owl-prev, .owl-next, .owl-dot span').on('click',function() {
        owl.trigger('refresh.owl.carousel'); // bugfix for autoplay timeout desynchronization when next clicked
    });

    // Delays
    $('.rh_banner_slide [data-delay]').each(function() {
        $(this).css('animation-delay', $(this).data('delay') + 'ms');
    });

    // Clients carousel
    var clients = $('.rh_owl_clients');

    // Initialize clients carousel
    clients.owlCarousel({
        loop: true,
        items: 5,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 600,
        responsiveClass: true, /* Allow responsive mode */
        responsive: { /* Number of items per min-width */
            0:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            }
        }
    });


    // Fluid scrolling - go top button
    $('.rh_go_top a').bind('click', function(event) {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300, 'swing');
        event.preventDefault();
    });

    // AOS
    AOS.init();
});