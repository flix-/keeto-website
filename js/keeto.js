$(document).ready(function() {
    /* smooth slide */
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

    /* header slider */
    $('#header-slider').lightSlider({
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

    /* examples slider */
    $('#examples-slider-dap').lightSlider({
        item: 1,
        loop: true,
        keyPress: false,
        slideMove: 1,
        controls: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600
    });

    $('#examples-slider-aobp').lightSlider({
        item: 1,
        loop: true,
        keyPress: false,
        slideMove: 1,
        controls: true,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600
    });
});
