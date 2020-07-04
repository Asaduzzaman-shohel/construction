$(document).ready(function($){
    "use strict";

    // Mobile Menu active
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu-active',
        meanScreenWidth: "991",

    });

    // Off-canvas Menu Active code
    $(".info-bar").on('click', function(){
        $(".off-canvas-menu").addClass("show-canvas-menu");
    });
    $(".close-icon").on('click', function(){
        $(".off-canvas-menu").removeClass("show-canvas-menu");
    });


    // Slider Active Code
    $('.slider-active').slick({
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


      // Portfolio masonary active
      var grid = $('.portfolio-masonary').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-item'
        }
      })

      // Portfolio filter menu active
    $('.portfolio-filter-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      grid.isotope({ filter: filterValue });
    });


    //Filter menu active class
    $('.portfolio-filter-menu button').on('click', function(event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // Image Popup Gallery Active
    $('.popup-img').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    // Counter up active
    $('.counter').counterUp({
      delay: 10,
      time: 1300
    });


    // Blog Active Code
    $('.blog-active').slick({
      dots: true,
      infinite: false,
      speed: 800,
      slidesToShow: 3,
      arrows: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    // Testimonial Active Code
    $('.testimonial-active').slick({
      dots: true,
      infinite: false,
      speed: 800,
      slidesToShow: 2,
      arrows: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // Brand Active Code
    $('.brand-active').slick({
      autoplay:true,
      autoplaySpeed:2000,
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      arrows: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 495,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    // Testimonial active home version 2
    $('.testimonial-item-active').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimonial-nav-active'
    });
    $('.testimonial-nav-active').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-item-active',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding:0,
      autoplay:true,
      prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });
		

}(jQuery));