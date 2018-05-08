$(document).ready(function() {

	/* Info */
	$('.info-btn, .close-info').click(function(e) {
		$('.info').fadeToggle(250);
		e.preventDefault();
	});

	/* Slick */
	$('.proyectos').slick({
		draggable: false,
		fade: true,
		mobileFirst: true,
		nextArrow: $('.next-project'),
		prevArrow: $('.prev-project')
	});

	if(window.location.hash) {
		$('.proyectos').slick('slickGoTo', window.location.hash.substring(1));
	}

	$('.proyectos').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var baseUrl = window.location.href.split('#')[0];
		window.location.replace( baseUrl + '#' + nextSlide );
	});

});
