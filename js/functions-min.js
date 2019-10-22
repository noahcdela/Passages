$(function () {
	let hScroll = $('.h-scroll'),
		hScrollContain = $('.h-scroll__container'),
		scrollPercent = 200,
		titleArrow = $('.title_arrow'),
		titleLetter = $('.title_letter'),
		img = $('.img'),
		introtl = new TimelineLite(),
		sectionIntro = $('section--intro'),
		daggerTop = $('.dagger-top'),
		daggerBottom = $('.dagger-bottom'),
		lineLeft = $('.line--left'),
		lineRight = $('.line--right');
		
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

	introtl.from(daggerTop, 3, {
		opacity: 0,
		y: -300,
		ease: Power2.easeInOut
	})
	.from(daggerBottom, 3.2, {
		opacity: 0,
		y: 300,
		ease: Power1.easeInOut
	}, '-=3')
	.from(lineLeft, 1, {
		width: 0
	}, '-=2')
	.from(lineRight, 1, {
		width: 0
	}, '-=2')
	.staggerFrom(titleLetter, 2, {
		x: 50,
		opacity: 0,
		ease: Power1.easeInOut
	}, .2, '-=3.1')
});