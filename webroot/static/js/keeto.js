$(document).ready(function() {
	$('a[href^="#scroll_"]').on('click', function(e) {
		e.preventDefault();

		var offset = 139;
		var target = this.hash;
		var $target = $(target);
		var target_offset = $target.offset().top - offset;

		$('html,body').stop().animate({
			'scrollTop': target_offset
		}, 1500);
	});

	$('#ls-header').lightSlider({
		item: 1,
		loop: true,
		keyPress: false,
		auto: true,
		slideMove: 1,
		controls: true,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		speed: 1800,
		pause: 10000
	});

	$('#examples-slider-dap').lightSlider({
		item: 1,
		loop: true,
		keyPress: false,
		slideMove: 1,
		controls: true,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		speed: 1200
	});

	$('#examples-slider-aobp').lightSlider({
		item: 1,
		loop: true,
		keyPress: false,
		slideMove: 1,
		controls: true,
		easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
		speed: 1200
	});

	$(document).on('scroll', function() {
		if ($('.navbar .navbar-nav .active').not('.logo').length == 0 && !$('#navbar').hasClass('showBorder')) {
			$('#navbar').addClass('showBorder');
		}
	});

	//Fired whenever a new menu item becomes active
	//See https://getbootstrap.com/javascript/#scrollspy-events
	$('[data-spy="scroll"]').on('activate.bs.scrollspy', function (e) {
		if ($('#navbar').hasClass('showBorder') && $('.navbar .navbar-nav .active').not('.logo').length > 0) {
			$('#navbar').removeClass('showBorder');
		}
	});
});