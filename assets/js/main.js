/*-----------------------------------------------------------------------------------
    Template Name: Deskly - Coworking Space HTML Template
    Author: InventxLab 
    Author URI: https://themeforest.net/user/inventxlab
    Version: 1.0

    ---------------------
    Table of Content
    ----------------------

    01 Preloader
    02 Back To Top
    03 AOS Init
    04 Sticky Header
    05 Offcanvas Menu
    06 Mobile Menu
    07 sticky element
    08 08 GLightbox
    09 GSAP Text Animation Style One
    10 GSAP Text Animation Style Two
    11 Reveal to Right Animation
    12 Reveal to Left Animation
    13 Reveal to Top Animation
    14 Reveal to Bottom Animation
    15 Increase height with scroll
    16 Workspace slider one
    17 Workspace slider two
    18 Product slider
    19 Testimonial two
    20 Company slider index-03.html file
    21 Marquee left
    22 Marquee Right
    23 Odometer
    24 Faq accordion
    25 Choose us tab
    26 meetspace two / global us tab
    27 Feature three
    28 Pin element
    29 Smooth scroll
    30 Progress bar
-----------------------------------------------------------------------------------*/

(function ($) {
    'use strict';

    /*===== 01 Preloader =====*/
    function loader() {
        $(window).on("load", function () {
            // Animate loader off screen
            $(".preloader").addClass("loaded");
            $(".preloader").delay(600).fadeOut();
        });
    }
    loader();


    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }
    if (typeof SplitText !== "undefined") {
        gsap.registerPlugin(SplitText);
    }

    /*===== 02 Back To Top =====*/
    if ($(".cloudflow-progress-circle path").length && !window.clinifyxProgressInitialized) {
        window.clinifyxProgressInitialized = true;

        var $progressPath = $(".cloudflow-progress-circle path");
        var pathLength = $progressPath[0].getTotalLength();

        $progressPath.css({
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
        });

        $(window).on("scroll.clinifyxProgress", function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength) / height;
            $progressPath.css("strokeDashoffset", progress);

            if (scroll > 200) {
                $(".cloudflow-progress-wrap").addClass("active");
            } else {
                $(".cloudflow-progress-wrap").removeClass("active");
            }
        });

        $(".cloudflow-progress-wrap").on("click.clinifyxProgress", function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 600);
        });
    }

    /*====== 03 AOS Init ======*/
    $(window).on('load', function () {
        AOS.init({
            once: true,
            offset: 120,
            duration: 900,
            easing: 'ease-out-cubic',
        });
    });

    /*===== 04 Sticky Header =====*/
    if ($('.stricky').length) {
        $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
    }
    $(window).on('scroll', function () {
        if ($('.stricked-menu').length) {
            var headerScrollPos = 100;
            var stricky = $('.stricked-menu');
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass('stricky-fixed');
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass('stricky-fixed');
            }
        }
    });

    /*===== 05 Offcanvas Menu =====*/
    $('.sidebar-menu-close, .body-overlay').on('click', function () {
        $('.offcanvas-sidebar').removeClass('active');
        $('.body-overlay').removeClass('active');
    });

    $('.offcanvas-sidebar-btn').on('click', function () {
        $('.offcanvas-sidebar').addClass('active');
        $('.body-overlay').addClass('active');
    });

    $('.body-overlay').on('click', function () {
        $(this).removeClass('active');
        $(".header-search-form-wrapper").removeClass("open");
    });

    /*===== 06 Mobile Menu =====*/
    $('.ixl-nav-hidden li.menu-item-has-children > a').append('<span class="ixl-menu-toggle"></span>');
    $('.ixl-header-menu li.menu-item-has-children, .ixl-menu-primary li.menu-item-has-children').append('<span class="ixl-menu-toggle"></span>');
    $('.ixl-menu-toggle').on('click', function () {
        if (!$(this).hasClass('active')) {
            $(this).closest('ul').find('.ixl-menu-toggle.active').toggleClass('active');
            $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
        }
        $(this).toggleClass('active');
        $(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
        $(this).closest('.menu-item').find('> .sub-menu').slideToggle();
    });

    $('.ixl-nav-hidden li.menu-item-has-children > a').click(function (e) {
        var target = $(e.target);
        if ($(this).attr('href') === '#' && !(target.is('.ixl-menu-toggle'))) {
            e.stopPropagation();
            if (!$(this).find('.ixl-menu-toggle').hasClass('active')) {
                $(this).closest('ul').find('.ixl-menu-toggle.active').toggleClass('active');
                $(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
            }
            $(this).find('.ixl-menu-toggle').toggleClass('active');
            $(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
            $(this).closest('.menu-item').find('> .sub-menu').slideToggle();
        }
    });
    $(".ixl-nav-mobile").on('click', function () {
        $(this).toggleClass('active');
        $('.ixl-header-menu').toggleClass('active');
    });

    $(".ixl-menu-close, .ixl-header-menu-backdrop").on('click', function () {
        $(this).removeClass('active');
        $('.ixl-header-menu').removeClass('active');
    });

    /*====== 07 sticky element======*/
    var $theiaStickyElements = $(".sticky-element");
    if ($theiaStickyElements.length) {
        var additionalMarginTop = 180;
        $theiaStickyElements.theiaStickySidebar({
            additionalMarginTop: additionalMarginTop,
            additionalMarginBottom: -100,
        });
    }

    /*===== 08 GLightbox =====*/
    const lightbox = GLightbox({
        selector: '.ixl-glightbox',
        videoAutoplay: false
    });


    /* ===== gsap text animations  =====*/
    function initSplitTextAnimations() {

        /*====== 09 GSAP Text Animation Style One ======*/
        if ($('.txt-anim-1').length) {
            let staggerAmount = 0.05,
                delayValue = 0.5,
                animatedTextElements = document.querySelectorAll('.txt-anim-1');

            animatedTextElements.forEach((element) => {
                let split = new SplitText(element, { type: "chars, words" });

                gsap.from(split.words, {
                    duration: 1,
                    delay: delayValue,
                    x: 20,
                    autoAlpha: 0,
                    stagger: staggerAmount,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%"
                    }
                });
            });
        }

        /*====== 10 GSAP Text Animation Style Two ======*/
        if ($('.txt-anim-2').length) {
            document.querySelectorAll('.txt-anim-2').forEach((element) => {

                if (element.animation) {
                    element.animation.progress(1).kill();
                    element.split.revert();
                }

                element.split = new SplitText(element, {
                    type: "lines,words,chars",
                    linesClass: "split-line",
                });

                gsap.set(element, { perspective: 400 });
                gsap.set(element.split.chars, { opacity: 0, x: 50 });

                element.animation = gsap.to(element.split.chars, {
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%"
                    },
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "back.out(1.7)",
                    stagger: 0.02
                });
            });
        }
    }

    document.fonts.ready.then(() => {
        initSplitTextAnimations();
    });

    /*===== 11 Reveal to Right Animation =====*/
    function desklyRevealRightAnimation() {
        if ($(".ixl-reveal-right").length) {
            $(".ixl-reveal-right").each(function () {
                const container = this;
                const image = $(container).find("img").get(0);
                if (!image) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        toggleActions: "play none none none",
                    },
                });

                tl.set(container, { autoAlpha: 1 });
                tl.from(container, {
                    duration: 1.5,
                    xPercent: 100,
                    ease: Power2.in,
                });
                tl.from(image, {
                    duration: 1.5,
                    xPercent: -100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.in,
                });
            });
        }
    }
    desklyRevealRightAnimation();

    //*===== 12 Reveal to Left Animation =====*/
    function desklyRevealLeftAnimation() {
        if ($(".ixl-reveal-left").length) {
            $(".ixl-reveal-left").each(function () {
                const container = this;
                const image = $(container).find("img").get(0);
                if (!image) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        toggleActions: "play none none none",
                    },
                });

                tl.set(container, { autoAlpha: 1 });
                tl.from(container, {
                    duration: 1.5,
                    xPercent: -100,
                    ease: Power2.out,
                });
                tl.from(image, {
                    duration: 1.5,
                    xPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.out,
                });
            });
        }
    }
    desklyRevealLeftAnimation();

    /*===== 13 Reveal to Top Animation =====*/
    function desklyRevealTopAnimation() {
        if ($(".ixl-reveal-top").length) {
            $(".ixl-reveal-top").each(function () {
                const container = this;
                const image = $(container).find("img").get(0);
                if (!image) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        toggleActions: "play none none none",
                    },
                });

                tl.set(container, { autoAlpha: 1 });
                tl.from(container, {
                    duration: 1.5,
                    yPercent: 100,
                    ease: Power2.in,
                });
                tl.from(image, {
                    duration: 1.5,
                    yPercent: -100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.in,
                });
            });
        }
    }
    desklyRevealTopAnimation();

    /*===== 14 Reveal to Bottom Animation =====*/
    function desklyRevealBottomAnimation() {
        if ($(".ixl-reveal-bottom").length) {
            $(".ixl-reveal-bottom").each(function () {
                const container = this;
                const image = $(container).find("img").get(0);
                if (!image) return;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        toggleActions: "play none none none",
                    },
                });

                tl.set(container, { autoAlpha: 1 });
                tl.from(container, {
                    duration: 1.5,
                    yPercent: -100,
                    ease: Power2.in,
                });
                tl.from(image, {
                    duration: 1.5,
                    yPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: Power2.in,
                });
            });
        }
    }
    desklyRevealBottomAnimation();

    /*===== 15 Increase height with scroll =====*/
    if ($(".shape").length > 0) {
        $(".shape").each(function () {

            gsap.fromTo(this,
                { height: "1px" },
                {
                    height: "220px",
                    ease: "none",
                    scrollTrigger: {
                        trigger: this,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true
                    }
                }
            );

        });
    }

    /*===== 16 Workspace slider one =====*/
    if ($('.workSpaceSlider').length > 0) {
        let workSpaceSliderOne = new Swiper(".workSpaceSlider", {
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 800,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            allowThouchMove: true,
        });
    };

    /*===== 17 Workspace slider two =====*/
    if ($('.workplaceTwo').length > 0) {
        let workplaceSliderTwo = new Swiper(".workplaceTwo", {
            spaceBetween: 24,
            speed: 800,
            slidesPerView: 1,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });
    };

    /*===== 18 Product slider =====*/
    if ($('.productSliderItem').length > 0) {
        let productSliderItem = new Swiper(".productSliderItem", {
            spaceBetween: 24,
            speed: 800,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            breakpoints: {
                575: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1199: {
                    slidesPerView: 4,
                },
            },
        });
    };

    /*===== 19 Testimonial two =====*/
    let testimonialTwoSliderThree; // thumbs
    let testimonialTwoSliderOne;   // main
    let testimonialTwoSliderTwo;   // content
    if ($('.testimonialTwoImages').length) {

        testimonialTwoSliderThree = new Swiper(".testimonialTwoImages", {
            spaceBetween: 15,
            slidesPerView: 2,
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            loop: false,
            speed: 800,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                575: { slidesPerView: 4 },
                //     767: { slidesPerView: 3 },
                //     991: { slidesPerView: 4 },
            },
        });
    }
    if ($('.testimonialTwoImg').length) {

        testimonialTwoSliderOne = new Swiper(".testimonialTwoImg", {
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 800,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            thumbs: {
                swiper: testimonialTwoSliderThree
            }
        });
    }
    if ($('.testimonialTwoContent').length) {

        testimonialTwoSliderTwo = new Swiper(".testimonialTwoContent", {
            spaceBetween: 0,
            slidesPerView: 1,
            speed: 800,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });

        testimonialTwoSliderOne.controller.control = testimonialTwoSliderTwo;
        testimonialTwoSliderTwo.controller.control = testimonialTwoSliderOne;
    }

    /*===== 20 Company slider index-03.html file =====*/
    if ($('.companyItemThree').length > 0) {
        let companyItemThreeSlider = new Swiper(".companyItemThree", {
            spaceBetween: 24,
            slidesPerView: 2,
            loop: true,
            speed: 800,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                575: {
                    slidesPerView: 2,
                },
                767: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 6,
                },
            },
        });
    };

    /*===== 21 Marquee left =====*/
    if ($('.marquee-left').length > 0) {
        $('.marquee-left').marquee({
            duration: 30000,
            gap: 20,
            direction: 'left',
            duplicated: true,
            startVisible: true
        });
    };

    /*===== 22 Marquee Right =====*/
    if ($('.marquee-right').length > 0) {
        $('.marquee-right').marquee({
            duration: 30000,
            gap: 20,
            direction: 'right',
            duplicated: true,
            startVisible: true
        });
    };

    /*===== 23 Odometer =======*/
    if ($(".odometer").length > 0) {
        $('.odometer').appear();

        $(document.body).on('appear', '.odometer', function () {
            var $this = $(this); // only current odometer
            var countNumber = $this.attr("data-count");

            $this.html(countNumber);
        });
    }

    /*===== 24 Faq accordion ======*/
    $('.faq-item .heading').on('click', function () {
        let parent = $(this).parent();

        if (parent.hasClass('active')) {
            // Close the current item
            parent.removeClass('active');
            parent.find('.content').stop(true, true).animate(
                { height: 0, opacity: 0 },
                400,
                function () { $(this).css('display', 'none'); }
            );
        } else {
            // Close other items
            $('.faq-item.active').removeClass('active').each(function () {
                $(this).find('.content').stop(true, true).animate(
                    { height: 0, opacity: 0 },
                    400,
                    function () { $(this).css('display', 'none'); }
                );
            });

            // Open current item
            parent.addClass('active');
            let content = parent.find('.content');
            content.stop(true, true).css({ display: 'block', height: 'auto', opacity: 0 });
            let autoHeight = content.outerHeight();
            content.css('height', 0).animate({ height: autoHeight, opacity: 1 }, 400, function () {
                $(this).css('height', 'auto'); // allow dynamic height after animation
            });
        }
    });

    /*==== 25 Choose us tab =====*/
    $('.tab-link li').on('click', function () {

        const $this = $(this);
        const index = $this.index();

        const $wrap = $this.closest('.ixl-choose-us-one-tab, .ixl-workspace-two-wrap');

        // Tabs
        $wrap.find('.tab-link li').removeClass('active');
        $this.addClass('active');

        // Tab Content
        $wrap.find('.tab-item')
            .removeClass('active')
            .eq(index)
            .addClass('active');
    });

    /*==== 26 meetspace two / global us tab =====*/
    $('.ixl-tab-nav li').on('click', function () {
        var $clicked = $(this);
        var $wrapper = $clicked.closest('.ixl-tab');

        // Remove active class from nav
        $wrapper.find('.ixl-tab-nav li').removeClass('active');
        $clicked.addClass('active');
        var target = $clicked.data('tab');

        // Fade transition for tab panes
        $wrapper.find('.ixl-tab-pane.active').stop(true, true).fadeOut(50, function () {
            $(this).removeClass('active');

            // Fade in the clicked tab
            $wrapper.find('#' + target).stop(true, true).fadeIn(50, function () {
                $(this).addClass('active');
            });
        });
    });

    /*==== 27 Feature three  =====*/
    $('.ixl-feature-three-item').on('mouseenter', function () {
        $('.ixl-feature-three-item').removeClass('active');
        $(this).addClass('active');
    })
    $('.ixl-feature-three-item').on('mouseleave', function () {
        $('.ixl-feature-three-item').removeClass('active');
        $(this).addClass('active');
    })

    /*==== 28 Pin element  =====*/
    if ($("#meetSpace .panel").length) {
        $("#meetSpace .panel").stick_in_parent({
            offset_top: 100
        });
    }

    /*==== 29 Smooth scroll  =====*/
    const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        direction: 'vertical',
        gestureDirection: 'vertical',
        smoothTouch: false,
        touchMultiplier: 2,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    /*==== 30 Progress bar  =====*/
    function initProgressBars(selector = '.progress-item', options = {}) {
        const {
            duration = 1.4,
            ease = 'power3.out',
            start = 'top 80%',
            stagger = 0.15,
        } = options;

        const items = gsap.utils.toArray(selector);

        items.forEach((item, i) => {
            const percent = parseFloat(item.dataset.percent) || 0;
            const fill = item.querySelector('.progress-fill');
            const badge = item.querySelector('.progress-badge');

            // Set badge text dynamically (so it's always in sync with data-percent)
            if (badge) badge.textContent = percent + '%';

            // Counter object for animated number inside badge
            const counter = { val: 0 };

            ScrollTrigger.create({
                trigger: item,
                start,
                once: true,
                onEnter() {
                    const delay = i * stagger;

                    // ── Fill bar ──────────────────────────────
                    gsap.fromTo(fill,
                        { width: '0%' },
                        {
                            width: percent + '%',
                            duration,
                            ease,
                            delay,
                        }
                    );

                    // ── Badge: fade + slide in ────────────────
                    gsap.to(badge, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: 'power2.out',
                        delay: delay + duration * 0.3,
                    });

                    // ── Badge: count-up number ────────────────
                    gsap.to(counter, {
                        val: percent,
                        duration,
                        ease,
                        delay,
                        onUpdate() {
                            badge.textContent = Math.round(counter.val) + '%';
                        },
                    });
                },
            });
        });
    }
    initProgressBars('.progress-item', {
        duration: 1.5,
        ease: 'power3.out',
        start: 'top 85%',
        stagger: 0.18,
    });

})(jQuery);

