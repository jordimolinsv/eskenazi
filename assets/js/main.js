$(document).ready(function() {

	/* Info */
	$('.info-btn, .close-info').click(function(e) {
		$('.info').fadeToggle(250);
		e.preventDefault();
	});

	/* Slick projects */
	$('.proyectos').slick({
		draggable: false,
		fade: true,
		mobileFirst: true,
		infinite: true,
		prevArrow: $('.prev-project'),
		nextArrow: $('.next-project')
	});

	/* Slick slides */
	$('.slides').slick({
		draggable: false,
		fade: true,
		mobileFirst: true,
		infinite: false,
		prevArrow: $('.prev-slide'),
		nextArrow: $('.next-slide')
	});

	/* Get hash and go to slide */
	if(window.location.hash) {
		$('.proyectos').slick('slickGoTo', window.location.hash.substring(1));
	}

	/* Update URL */
	$('.proyectos').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var baseUrl = window.location.href.split('#')[0];
		window.location.replace( baseUrl + '#' + nextSlide );
	});

});
