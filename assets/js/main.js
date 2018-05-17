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

	/* Link color */
	var linkColor = function(color) {
		$('a').hover(function() {
			$(this).css('color', color);
		}, function(){
			$(this).css('color', 'black');
		});
	};
	var defaultColor = '#777';
	var currColor = $('.slick-current .slide').attr('data-color');
	if(!currColor) currColor = defaultColor;
	linkColor(currColor);

	/* Slick on beforeChange */
	$('.proyectos').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var $nextSlide = $('.slide[data-index="' + nextSlide + '"]');
		/* Change link color */
		var dataColor = $nextSlide.attr('data-color');
		if(!dataColor) dataColor = defaultColor;
		linkColor(dataColor);
		/* Update URL */
		var baseUrl = window.location.href.split('#')[0];
		var slug = $nextSlide.attr('data-slug');
		window.location.replace( baseUrl + '#' + slug );
	});

});
