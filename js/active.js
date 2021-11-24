// wow animation 
new WOW().init();
// second slider owl carousel 
$('.second-slider-active').owlCarousel({
    loop:true,
    margin:0,
    items: 3,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})
// slick slider active
$('.slick-item-active').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
        dots: false,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		asNavFor: '.slick-nav'
});
$('.slick-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slick-item-active',
        dots: false,
        arrows: false,
        infinite: true,
		centerMode: true,
		focusOnSelect: true,
        centerPadding: 0,
        responsive: [
                        {
                        breakpoint: 1399,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                        },
                        {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                        },
                        {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll:1,
                        }
                        },
                        {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                        },
                        {
                        breakpoint: 426,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                            
                        }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
        ]

});
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

// first slider owl carousel 

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});
// css preloader 
$(window).on('load', function () {
		//$("#loading").delay(2000).fadeOut(500);
	$("#loading").fadeOut(500);
});
//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});

