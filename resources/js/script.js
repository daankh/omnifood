$(document).ready(function () {

    // var waypoint = new Waypoint({
    //     element: document.getElementById('px-offset-waypoint'),
    //     handler: function (direction) {
    //         notify('I am 20px from the top of the window')
    //     },
    //     offset: 20
    // })

    // Using Waypoints jQuery Library
    // Efekt pojawienia się sticky menu po przesunięciu w dół
    // For sticky navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px' //Przesuwa miejsce pojawienia się
    })

    //Scroll on buttons
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000)
    })

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000)
    })

    // Navigation scroll

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // Animation on scroll
    $(".js--wp-1").waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
        offset: '50%' //Przesuwa miejsce pojawienia się
    })

    $(".js--wp-2").waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp')
    }, {
        offset: '50%' //Przesuwa miejsce pojawienia się
    })


    $(".js--wp-3").waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn')
    }, {
        offset: '50%' //Przesuwa miejsce pojawienia się
    })


    $(".js--wp-4").waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse')
    }, {
        offset: '50%' //Przesuwa miejsce pojawienia się
    })

    // Mobuile navigation
    $('.js--nav-icon').click(function () {
        let nav = $('.js--main-nav')
        let icon = $('.js--nav-icon i')
        nav.slideToggle(100)

        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times')
            icon.removeClass('fa-bars')
        } else {
            icon.addClass('fa-bars')
            icon.removeClass('fa-times')
        }
    })

})