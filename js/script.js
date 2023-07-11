$(function() {
    // Header menu
    $(".menu-burger").click(function () {
    $(".top-menu__list").toggleClass("menu-mobile")
    });
    // Owl carousel
    $(".slider.owl-carousel").owlCarousel({
	    loop: true,
	    items: 1,
	    smartSpeed: 500,
	    dots: true,
        autoHeight: true
	});
 })