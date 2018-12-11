$(document).ready(function() {

	/* Info */
	$('.info-btn, .close-info').click(function(e) {
		$('.info').fadeToggle(250);
		e.preventDefault();
	});

	/* Slick projects */
	$('.proyectos').slick({
		// autoplay: true,
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

	/* Text color */
	var changeTextColor = function(color) {
		$('.site-title a, .info-btn, .caption, .caption a').css('color', color);
	}
	var currTextColor = $('.slick-current .slide').attr('data-color_texto');
	changeTextColor(currTextColor);

	/* Link color */
	var linkColor = function(color) {
		$('a').hover(function() {
			$(this).css('color', color);
		}, function(){
			var currTextColor = $('.slick-current .slide').attr('data-color_texto');
			$('.site-title a, .info-btn, .caption a').css('color', currTextColor);
			$('.info a').css('color', 'black');
		});
	};
	var currColor = $('.slick-current .slide').attr('data-color');
	linkColor(currColor);

	/* Slick on beforeChange */
	$('.proyectos').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var $nextSlide = $('.slide[data-index="' + nextSlide + '"]');
		/* Change link color */
		var dataColor = $nextSlide.attr('data-color');
		if(!dataColor) dataColor = 'red';
		linkColor(dataColor);
		/* Change text color */
		var dataTextColor = $nextSlide.attr('data-color_texto');
		changeTextColor(dataTextColor);
		/* Update URL */
		var baseUrl = window.location.href.split('#')[0];
		var slug = $nextSlide.attr('data-slug');
		window.location.replace( baseUrl + '#' + slug );
	});

});
