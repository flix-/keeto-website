$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var offset = 100;
        var target = this.hash;
        var $target = $(target);
        var target_offset = $target.offset().top - offset;

	    $('html, body').stop().animate({
            'scrollTop': target_offset
        }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

