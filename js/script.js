$(window).load(function() {

		$('.grid').isotope({
		columnWidth: '.grid-sizer',
		itemSelector: '.item',
		percentPosition: true,
		isAnimated: !Modernizr.csstransitions
	});

$('.trigger').on('click', function() {
	$('nav').slideToggle('slow');
	return false;
	});
});