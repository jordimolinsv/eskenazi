$(document).ready(function() {

	/* Full Page */
	$('.main').fullpage({
		controlArrows: false,
		autoScrolling: false
	});

	/* Info */
	$('.info-btn, .close-info').click(function(e) {
		$('.info').fadeToggle(250);
		e.preventDefault();
	});

});
