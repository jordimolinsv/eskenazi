$(document).ready(function() {

	/* Info */
	$('.info-btn, .close-info').click(function(e) {
		$('.info').fadeToggle(250);
		e.preventDefault();
	});

	/* Slick projects */
	$('.proyectos').slick({
		// draggable: false,
		fade: true,
		mobileFirst: true,
		infinite: true,
		prevArrow: $('.prev-slide'),
		nextArrow: $('.next-slide')
	});

	/* Get hash and go to slide */
	if(window.location.hash) {
		var hash = window.location.hash.substring(1);
		var index = $('.slide[data-slug="' + hash + '"]').first().attr('data-index');
		$('.proyectos').slick('slickGoTo', index);
	}

	/* Update URL */
	$('.proyectos').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var baseUrl = window.location.href.split('#')[0];
		var slug = $('.slide[data-index="' + nextSlide + '"]').attr('data-slug');
		window.location.replace( baseUrl + '#' + slug );
	});

});
