$(document).ready(function() {
  $('#slider_home').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
	dots : false,
	nav : true,
	navText: [ "<i class=\"fa fa-chevron-left\"></i>",
             "<i class=\"fa fa-chevron-right\"></i>" ],
	responsive: {
	  0: {
		items: 1,
		loop: true,
		nav: true
	  }
	}
  })
})

