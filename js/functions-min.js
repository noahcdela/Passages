$(function () {
	let hScroll = $('.h-scroll'),
		hScrollContain = $('.h-scroll__container'),
		scrollPercent = 200,
		titleArrow = $('.title_arrow'),
		titleLetter = $('.title_letter'),
		img = $('.img');
		
		// The lower the number the more extreme the effect
		parallaxPercent = 10;

	function checkWidth() {
		var windowHeight = $(window).height(),
			calc = (scrollPercent * 100) + windowHeight;
		hScrollContain.css({
			height: calc
		});
	}
	checkWidth();
	$(window).resize(checkWidth);

	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		hScroll.css({
			transform: "translateX(-" + scroll / scrollPercent + "%)"
		});
		img.css({
			transform: "translateX(" + scroll / parallaxPercent + "%)"
		});
	});

	TweenMax.staggerFrom(titleLetter, 2, {
		x: 50,
		opacity: 0,
		ease: Power1.easeInOut
	}, .2);

});