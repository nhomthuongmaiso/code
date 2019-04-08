$(document).ready(function() {
  $('#noibat5575').owlCarousel({
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
		items: 2,
		//loop: true,
		//nav: true
	  },
	  430: {
		items: 2,
		//loop: true,
		//nav: false
	  },
	  600: {
		items: 2,
		//loop: true,
		//nav: false
	  },
	  800: {
		items: 3,
		//loop: true,
		//nav: false
	  },
	  1000: {
		items: 4,
		//nav: true,
		//loop: true,
		//margin: 20
	  }
	}
  })
})